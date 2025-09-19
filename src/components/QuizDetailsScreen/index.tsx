import { AppLogo, StartIcon } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { ScreenTypes } from '../../types'
import { convertSeconds } from '../../utils/helpers'
import Button from '../ui/Button'
import CenterCardContainer from '../ui/CenterCardContainer'
import HighlightedText from '../ui/HighlightedText'
import PageCenter from '../ui/PageCenter'

const QuizDetailsScreen = () => {
  const { setCurrentScreen, quizDetails, userName } = useQuiz()

  const { selectedQuizTopic, totalQuestions, totalScore, totalTime } = quizDetails

  const goToQuestionScreen = () => {
    setCurrentScreen(ScreenTypes.QuestionScreen)
  }

  const goBack = () => {
    setCurrentScreen(ScreenTypes.QuizTopicsScreen)
  }

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <div className="text-app-logo mb-8 text-center md:mb-12">
          <AppLogo width={220} />
        </div>
        
        <div className="mb-4 text-center">
          <p className="text-secondary-text">
            Good luck, <span className="font-medium text-theme-color">{userName}</span>!
          </p>
        </div>
        
        <h2 className="text-theme-color text-3xl font-bold">QUIZ</h2>

        <div className="mt-4 mb-10 max-w-[500px] text-center text-xl font-medium">
          <p className="text-5 mt-4 leading-[1.3] font-medium">
            Selected Quiz Topic: <HighlightedText>{selectedQuizTopic}</HighlightedText>
          </p>

          <p className="text-5 mt-4 leading-[1.3] font-medium">
            Total questions to attempt:{' '}
            <HighlightedText>{totalQuestions}</HighlightedText>
          </p>
          <p className="text-5 mt-4 leading-[1.3] font-medium">
            Score in total: <HighlightedText>{totalScore}</HighlightedText>
          </p>
          <p className="text-5 mt-4 leading-[1.3] font-medium">
            Total time: <HighlightedText>{convertSeconds(totalTime)}</HighlightedText>
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button
            text="Start Quiz"
            icon={<StartIcon />}
            iconPosition="left"
            onClick={goToQuestionScreen}
            bold
          />
          <Button
            text="Back"
            onClick={goBack}
            outline
          />
        </div>
      </CenterCardContainer>
    </PageCenter>
  )
}

export default QuizDetailsScreen
