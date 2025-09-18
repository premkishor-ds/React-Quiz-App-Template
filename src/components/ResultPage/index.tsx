import { useQuiz } from '../../context/QuizContext'
import { ScreenTypes } from '../../types'
import Button from '../ui/Button'
import ResultScreen from '../ResultScreen'

const ResultPage: React.FC = () => {
  const { setCurrentScreen, quizDetails } = useQuiz()

  const goHome = () => {
    setCurrentScreen(ScreenTypes.QuizTopicsScreen)
  }

  const retakeQuiz = () => {
    setCurrentScreen(ScreenTypes.QuizDetailsScreen)
  }

  return (
    <div>
      {/* Navigation Header */}
      <div className="bg-gray-50 dark:bg-gray-700 border-b p-2 sm:p-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <div className="flex gap-1 sm:gap-2 order-2 sm:order-1">
            <Button text="← Home" onClick={goHome} className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2" />
            <Button text="History" onClick={() => setCurrentScreen(ScreenTypes.HistoryScreen)} className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2" />
          </div>
          <h1 className="text-sm sm:text-xl font-bold text-center order-1 sm:order-2">Results</h1>
          <div className="flex gap-1 sm:gap-2 order-3">
            <Button text="Retake" onClick={retakeQuiz} className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2" />
            <Button text="New Quiz" onClick={goHome} className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2" />
          </div>
        </div>
      </div>

      {/* Result Content */}
      <ResultScreen />
    </div>
  )
}

export default ResultPage