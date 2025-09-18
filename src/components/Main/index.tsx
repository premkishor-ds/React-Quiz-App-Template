import { useEffect } from 'react'

import { useQuiz } from '../../context/QuizContext'
import { ScreenTypes } from '../../types'

import QuestionScreen from '../QuestionScreen'
import QuizDetailsScreen from '../QuizDetailsScreen'
import QuizTopicsScreen from '../QuizTopicsScreen'
import HomeScreen from '../HomeScreen'
import ResultScreen from '../ResultScreen'
import QuizPage from '../QuizPage'
import ResultPage from '../ResultPage'
import HistoryScreen from '../HistoryScreen'
import SplashScreen from '../SplashScreen'
import Header from '../Header'
import Footer from '../Footer'

function Main() {
  const { currentScreen, setCurrentScreen } = useQuiz()

  useEffect(() => {
    setTimeout(() => {
      setCurrentScreen(ScreenTypes.QuizTopicsScreen)
    }, 1000)
  }, [setCurrentScreen])

  const screenComponents = {
    [ScreenTypes.SplashScreen]: <SplashScreen />,
    [ScreenTypes.QuizTopicsScreen]: <HomeScreen />,
    [ScreenTypes.QuizDetailsScreen]: <QuizDetailsScreen />,
    [ScreenTypes.QuestionScreen]: <QuestionScreen />,
    [ScreenTypes.ResultScreen]: <ResultScreen />,
    [ScreenTypes.QuizPage]: <QuizPage />,
    [ScreenTypes.ResultPage]: <ResultPage />,
    [ScreenTypes.HistoryScreen]: <HistoryScreen />,
  }

  const ComponentToRender = screenComponents[currentScreen] || <SplashScreen />
  const showHeaderFooter = currentScreen !== ScreenTypes.SplashScreen

  return (
    <div className="min-h-screen flex flex-col">
      {showHeaderFooter && <Header />}
      <main className="flex-1">
        {ComponentToRender}
      </main>
      {showHeaderFooter && <Footer />}
    </div>
  )
}

export default Main
