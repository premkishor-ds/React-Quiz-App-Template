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

  const onClickNext = () => {
    const isMatch: boolean =
      selectedAnswer.length === correctAnswers.length &&
      selectedAnswer.every((answer) => correctAnswers.includes(answer))

    const updatedResult = [...result, { ...currentQuestion, selectedAnswer, isMatch }]
    setResult(updatedResult)

    const updatedAnswers = [...userAnswers]
    updatedAnswers[activeQuestion] = selectedAnswer
    setUserAnswers(updatedAnswers)

    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
      setSelectedAnswer(updatedAnswers[activeQuestion + 1] || [])
    } else {
      const timeTaken = quizDetails.totalTime - timer
      setEndTime(timeTaken)
      setShowResultModal(true)
    }
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

    // Update stored answers immediately
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
        {/* Jump-to-Question Navigation */}
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

      {(showTimerModal || showResultModal) && (
        <ModalWrapper
          title={showResultModal ? 'Done!' : 'Your time is up!'}
          subtitle={`You have attempted ${result.length} questions in total.`}
          onClick={handleModal}
          icon={showResultModal ? <CheckIcon /> : <TimerIcon />}
          buttonTitle="SHOW RESULT"
        />
      )}
    </PageCenter>
  )
}

export default QuestionScreen
