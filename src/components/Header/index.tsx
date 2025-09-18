import { AppLogo } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { ScreenTypes } from '../../types'
import ToggleTheme from '../ui/ToggleTheme'
import Button from '../ui/Button'

const Header: React.FC = () => {
  const { setCurrentScreen } = useQuiz()

  const goToHome = () => {
    setCurrentScreen(ScreenTypes.QuizTopicsScreen)
  }

  const goToHistory = () => {
    setCurrentScreen(ScreenTypes.HistoryScreen)
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={goToHome}>
          <AppLogo width={80} className="sm:w-[100px] md:w-[120px]" />
          <span className="ml-2 text-lg sm:text-xl font-bold hidden sm:block">Quiz App</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <Button text="Home" onClick={goToHome} className="text-sm px-2 py-1 sm:px-3 sm:py-2" />
          <Button text="History" onClick={goToHistory} className="text-sm px-2 py-1 sm:px-3 sm:py-2" />
          <ToggleTheme />
        </div>
      </div>
    </header>
  )
}

export default Header