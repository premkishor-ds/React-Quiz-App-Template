import { useState } from 'react'
import { useQuiz } from '../../context/QuizContext'
import { ScreenTypes } from '../../types'
import Button from '../ui/Button'
import CenterCardContainer from '../ui/CenterCardContainer'
import PageCenter from '../ui/PageCenter'
import { AppLogo } from '../../config/icons'

const UserSetup = () => {
  const [userName, setUserName] = useState('')
  const [error, setError] = useState('')
  const { setCurrentScreen, setUserName: setContextUserName } = useQuiz()

  const handleSubmit = () => {
    if (!userName.trim()) {
      setError('Please enter your name')
      return
    }

    if (userName.trim().length < 2) {
      setError('Name must be at least 2 characters long')
      return
    }

    setContextUserName(userName.trim())
    setCurrentScreen(ScreenTypes.QuizTopicsScreen)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <div className="text-app-logo mb-8 text-center md:mb-12">
          <AppLogo width={220} />
        </div>
        
        <h2 className="mb-6 text-center text-3xl font-bold text-theme-color">
          Welcome to Quiz App
        </h2>
        
        <p className="mb-8 text-center text-lg text-secondary-text">
          Enter your name to start taking quizzes and track your progress
        </p>

        <div className="w-full max-w-md">
          <label htmlFor="userName" className="block mb-2 text-sm font-medium text-primary-text">
            Your Name
          </label>
          <input
            id="userName"
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value)
              setError('')
            }}
            onKeyPress={handleKeyPress}
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-theme-color focus:border-transparent bg-white text-primary-text"
            maxLength={50}
          />
          {error && (
            <p className="mt-2 text-sm text-danger">{error}</p>
          )}
        </div>

        <div className="mt-8">
          <Button
            text="Continue"
            onClick={handleSubmit}
            disabled={!userName.trim()}
            bold
          />
        </div>
      </CenterCardContainer>
    </PageCenter>
  )
}

export default UserSetup