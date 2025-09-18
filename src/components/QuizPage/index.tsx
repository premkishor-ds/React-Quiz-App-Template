import { useQuiz } from '../../context/QuizContext'
import { ScreenTypes } from '../../types'
import Button from '../ui/Button'
import PageCenter from '../ui/PageCenter'
import QuestionScreen from '../QuestionScreen'

const QuizPage: React.FC = () => {
  const { setCurrentScreen, quizDetails } = useQuiz()

  const goHome = () => {
    setCurrentScreen(ScreenTypes.QuizTopicsScreen)
  }

  const goToResults = () => {
    setCurrentScreen(ScreenTypes.ResultPage)
  }

  return (
    <div>
      {/* Navigation Header */}
      <div className="bg-gray-50 dark:bg-gray-700 border-b p-2 sm:p-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex gap-1 sm:gap-2 order-2 sm:order-1">
            <Button text="← Home" onClick={goHome} className="text-xs sm:text-sm lg:text-base px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2" />
            <Button text="History" onClick={() => setCurrentScreen(ScreenTypes.HistoryScreen)} className="text-xs sm:text-sm lg:text-base px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2" />
          </div>
          <h1 className="text-sm sm:text-lg lg:text-xl font-bold text-center order-1 sm:order-2 max-w-md lg:max-w-lg truncate">{quizDetails.selectedQuizTopic}</h1>
          <Button text="Results" onClick={goToResults} className="text-xs sm:text-sm lg:text-base px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2 order-3" />
        </div>
      </div>

      {/* Quiz Content */}
      <QuestionScreen />
    </div>
  )
}

export default QuizPage