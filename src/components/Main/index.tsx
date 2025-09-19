import { useEffect } from 'react'

import { useQuiz } from '../../context/QuizContext'
import { ScreenTypes } from '../../types'

import UserSetup from '../UserSetup'
import QuestionScreen from '../QuestionScreen'
import QuizDetailsScreen from '../QuizDetailsScreen'
import QuizTopicsScreen from '../QuizTopicsScreen'
import ResultScreen from '../ResultScreen'
import SplashScreen from '../SplashScreen'
import QuizHistory from '../QuizHistory'

function Main() {
  const { currentScreen, setCurrentScreen, userName } = useQuiz()

  useEffect(() => {
    setTimeout(() => {
      // Check if user is already set up
      if (userName) {
        setCurrentScreen(ScreenTypes.QuizTopicsScreen)
      } else {
        setCurrentScreen(ScreenTypes.UserSetupScreen)
      }
    }, 1000)
  }, [setCurrentScreen, userName])

  const screenComponents = {
    [ScreenTypes.SplashScreen]: <SplashScreen />,
    [ScreenTypes.UserSetupScreen]: <UserSetup />,
    [ScreenTypes.QuizTopicsScreen]: <QuizTopicsScreen />,
    [ScreenTypes.QuizDetailsScreen]: <QuizDetailsScreen />,
    [ScreenTypes.QuestionScreen]: <QuestionScreen />,
    [ScreenTypes.ResultScreen]: <ResultScreen />,
    [ScreenTypes.QuizHistoryScreen]: <QuizHistory />,
  }

  const ComponentToRender = screenComponents[currentScreen] || <SplashScreen />

  return <>{ComponentToRender}</>
}

export default Main
