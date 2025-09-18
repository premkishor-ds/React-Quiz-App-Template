import { FC, useEffect, useState } from 'react'
import { AppLogo, CheckIcon, Next, TimerIcon } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { useTimer } from '../../hooks'
import { ScreenTypes } from '../../types'
import Button from '../ui/Button'
import ModalWrapper from '../ui/ModalWrapper'
import PageCenter from '../ui/PageCenter'
import Question from './Question'
import QuizHeader from './QuizHeader'

const QuestionScreen: FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([])
  const [userAnswers, setUserAnswers] = useState<string[][]>([])
  const [showTimerModal, setShowTimerModal] = useState<boolean>(false)
  const [showResultModal, setShowResultModal] = useState<boolean>(false)
  const [showFinishConfirm, setShowFinishConfirm] = useState<boolean>(false)

  const {
    questions,
    quizDetails,
    result,
    setResult,
    setCurrentScreen,
    timer,
    setTimer,
    setEndTime,
  } = useQuiz()

  const currentQuestion = questions[activeQuestion]
  const { question, type, choices, code, image, correctAnswers } = currentQuestion

  const unansweredCount = questions.length - userAnswers.filter((ans) => ans?.length > 0).length

  // 🔹 Calculate total score
  const calculateScore = (results: any[]) => {
    return results.reduce((acc, curr) => {
      return curr.isMatch ? acc + (curr.score || 0) : acc
    }, 0)
  }

  // 🔹 API call to submit result
const submitResult = async (finalResult: any[]) => {
  try {
    const payload = {
      user_name: "ergert",
      subject: "trhty",
      topic: "trhr",
      set: "gfre",
      score: calculateScore(finalResult),
      questions: finalResult.map((q, index) => ({
        id: q.id || index + 1,
        question: q.question,
        type: q.type,
        choices: q.choices,
        correctAnswers: q.correctAnswers,
        score: q.score,
        code: q.code || null,
        image: q.image || null,
        selectedAnswer: q.selectedAnswer || [],
        isMatch: q.isMatch,
      })),
    }

    console.log("🚀 Sending payload:", payload)

    const response = await fetch(`http://localhost:3001/results`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Failed to submit result: ${response.status} ${errorText}`)
    }

    const data = await response.json()
    console.log("✅ Result submitted successfully:", data)
  } catch (err) {
    console.error("❌ Error submitting result:", err)
  }
}


  const onClickNext = () => {
    if (activeQuestion === questions.length - 1) {
      setShowFinishConfirm(true)
      return
    }

    const isMatch =
      selectedAnswer.length === correctAnswers.length &&
      selectedAnswer.every((answer) => correctAnswers.includes(answer))

    const updatedResult = [...result, { ...currentQuestion, selectedAnswer, isMatch }]
    setResult(updatedResult)

    const updatedAnswers = [...userAnswers]
    updatedAnswers[activeQuestion] = selectedAnswer
    setUserAnswers(updatedAnswers)

    setActiveQuestion((prev) => prev + 1)
    setSelectedAnswer(updatedAnswers[activeQuestion + 1] || [])
  }

  const confirmFinishQuiz = async () => {
    const isMatch =
      selectedAnswer.length === correctAnswers.length &&
      selectedAnswer.every((answer) => correctAnswers.includes(answer))

    const updatedResult = [...result, { ...currentQuestion, selectedAnswer, isMatch }]
    setResult(updatedResult)

    const updatedAnswers = [...userAnswers]
    updatedAnswers[activeQuestion] = selectedAnswer
    setUserAnswers(updatedAnswers)

    const timeTaken = quizDetails.totalTime - timer
    setEndTime(timeTaken)

    // 🔹 Call API when quiz finishes
    await submitResult(updatedResult)

    setShowResultModal(true)
    setShowFinishConfirm(false)
  }

  const onClickPrevious = () => {
    if (activeQuestion > 0) {
      const newIndex = activeQuestion - 1
      setActiveQuestion(newIndex)
      setSelectedAnswer(userAnswers[newIndex] || [])
    }
  }

  const handleAnswerSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target

    let updatedSelection: string[] = []

    if (type === 'MAQs') {
      updatedSelection = checked
        ? [...selectedAnswer, name]
        : selectedAnswer.filter((item) => item !== name)
    } else if (type === 'MCQs' || type === 'boolean') {
      if (checked) {
        updatedSelection = [name]
      }
    }

    setSelectedAnswer(updatedSelection)

    const updatedAnswers = [...userAnswers]
    updatedAnswers[activeQuestion] = updatedSelection
    setUserAnswers(updatedAnswers)
  }

  const handleModal = () => {
    setCurrentScreen(ScreenTypes.ResultScreen)
    document.body.style.overflow = 'auto'
  }

  useEffect(() => {
    if (showTimerModal || showResultModal) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showTimerModal, showResultModal])

  useTimer(timer, quizDetails, setEndTime, setTimer, setShowTimerModal, showResultModal)

  return (
    <PageCenter>
      <div className="text-app-logo mt-3 mb-5 text-center md:my-12">
        <AppLogo className="w-[185px] md:w-[270px]" />
      </div>
      <div className="bg-card-bg relative mb-18 min-h-[500px] w-full rounded-sm p-4 pb-20 md:w-[900px] md:px-14 md:pt-8">
        <QuizHeader
          activeQuestion={activeQuestion}
          totalQuestions={quizDetails.totalQuestions}
          timer={timer}
        />

        {/* Jump Navigation */}
        <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
          {questions.map((_, index) => {
            const isActive = activeQuestion === index
            const isAnswered = userAnswers[index] && userAnswers[index].length > 0

            return (
              <button
                key={index}
                onClick={() => {
                  setActiveQuestion(index)
                  setSelectedAnswer(userAnswers[index] || [])
                }}
                className={`w-8 h-8 rounded-full border text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : isAnswered
                    ? 'bg-green-100 text-green-800'
                    : 'bg-white text-gray-700'
                }`}
              >
                {index + 1}
              </button>
            )
          })}
        </div>

        <Question
          question={question}
          code={code}
          image={image}
          choices={choices}
          type={type}
          handleAnswerSelection={handleAnswerSelection}
          selectedAnswer={selectedAnswer}
        />

        <div className="absolute right-4 bottom-8 flex w-[90%] justify-end gap-5 md:right-15 md:w-auto md:justify-normal">
          {activeQuestion > 0 && (
            <Button
              text="Previous"
              onClick={onClickPrevious}
              iconPosition="left"
            />
          )}
          <Button
            text={activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            onClick={onClickNext}
            icon={<Next />}
            iconPosition="right"
            disabled={selectedAnswer.length === 0}
          />
        </div>
      </div>

      {/* Timer/Result Modal */}
      {(showTimerModal || showResultModal) && (
        <ModalWrapper
          title={showResultModal ? 'Done!' : 'Your time is up!'}
          subtitle={`You have attempted ${result.length} questions in total.`}
          onClick={handleModal}
          icon={showResultModal ? <CheckIcon /> : <TimerIcon />}
          buttonTitle="SHOW RESULT"
        />
      )}

      {/* Finish Confirmation Modal */}
      {showFinishConfirm && (
        <ModalWrapper
          title="Finish Quiz?"
          subtitle={`You still have ${unansweredCount} unanswered question${unansweredCount !== 1 ? 's' : ''}. Are you sure you want to submit?`}
          icon={<CheckIcon />}
          buttonTitle="YES, FINISH"
          cancelTitle="Cancel"
          onClick={confirmFinishQuiz}
          onClose={() => setShowFinishConfirm(false)}
        />
      )}
    </PageCenter>
  )
}

export default QuestionScreen
