import { useState } from 'react'
import { AppLogo } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { ScreenTypes } from '../../types'
import { quiz } from '../../data/QuizQuestions'
import { subjects, getTopicsForSubject } from '../../data/subjectTopics'

import English from '../../assets/icons/english.svg?react'
import Math from '../../assets/icons/math.svg?react'
import Reasoning from '../../assets/icons/reasoning.svg?react'
import Gk from '../../assets/icons/gk.svg?react'
import Question from '../../assets/icons/question.svg?react'

import cn from 'classnames'
import Button from '../ui/Button'
import CenterCardContainer from '../ui/CenterCardContainer'
import HighlightedText from '../ui/HighlightedText'
import PageCenter from '../ui/PageCenter'

const HomeScreen: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>('')
  const [selectedTopic, setSelectedTopic] = useState<string>('')
  const { selectQuizTopic, setCurrentScreen } = useQuiz()

  const handleSubjectSelect = (subject: string) => {
    setSelectedSubject(subject)
    setSelectedTopic('')
  }

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic)
  }

  const handleStartQuiz = () => {
    if (selectedTopic && quiz[selectedTopic]) {
      selectQuizTopic(selectedTopic)
      setCurrentScreen(ScreenTypes.QuizDetailsScreen)
    }
  }

  const availableTopics = selectedSubject ? getTopicsForSubject(selectedSubject) : []

  const getIconForSubject = (subject: string) => {
    switch (subject) {
      case 'English': return <English />
      case 'Math': return <Math />
      case 'Reasoning': return <Reasoning />
      case 'General Knowledge': return <Gk />
      case 'Sets': return <Question />
      case 'Science': return <Question />
      default: return <Question />
    }
  }

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <div className="text-app-logo mb-8 text-center md:mb-12">
          <AppLogo width={220} />
        </div>
        <h2 className="mb-5 text-center text-3xl font-bold">
          <HighlightedText>QUIZ</HighlightedText>
        </h2>
        
        {/* Subject Selection */}
        <div className="mb-6 sm:mb-8">
          <p className="text-center text-lg sm:text-xl leading-7 font-medium mb-4">
            Select Subject:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:flex xl:flex-wrap xl:justify-center gap-3 lg:gap-4">
            {subjects.map((subject) => (
              <div
                key={subject}
                onClick={() => handleSubjectSelect(subject)}
                className={cn(
                  'flex items-center justify-center lg:justify-start rounded-xl p-3 lg:p-4 cursor-pointer transition-colors duration-300 min-h-[80px] lg:min-h-[60px]',
                  selectedSubject === subject
                    ? 'border-theme-color border-2 bg-theme-color/10'
                    : 'border-disabled-button border bg-select-topic-bg hover:bg-theme-color/5'
                )}
              >
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="w-8 h-8 lg:w-6 lg:h-6">{getIconForSubject(subject)}</div>
                  <span className="mt-2 lg:mt-0 lg:ml-3 text-xs lg:text-base font-medium text-center lg:text-left">{subject}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Topic Selection */}
        {selectedSubject && (
          <div className="mb-6 sm:mb-8">
            <p className="text-center text-base sm:text-lg font-medium mb-4">
              Select Topic from {selectedSubject}:
            </p>
            <div className="max-h-48 sm:max-h-60 lg:max-h-80 overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                {availableTopics.map((topic) => (
                  <div
                    key={topic}
                    onClick={() => handleTopicSelect(topic)}
                    className={cn(
                      'rounded-lg p-3 lg:p-4 cursor-pointer transition-colors duration-300 text-sm lg:text-base text-center min-h-[50px] lg:min-h-[60px] flex items-center justify-center',
                      selectedTopic === topic
                        ? 'border-theme-color border-2 bg-theme-color/10'
                        : 'border-disabled-button border bg-select-topic-bg hover:bg-theme-color/5',
                      !quiz[topic] && 'opacity-50 cursor-not-allowed'
                    )}
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Start Quiz Button */}
        {selectedTopic && quiz[selectedTopic] && (
          <div className="text-center flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
            <Button 
              text="View History" 
              onClick={() => setCurrentScreen(ScreenTypes.HistoryScreen)}
              className="w-full sm:w-auto lg:px-8 lg:py-3"
            />
            <Button 
              text={`Start ${selectedTopic} Quiz`} 
              onClick={handleStartQuiz} 
              bold
              className="w-full sm:w-auto lg:px-8 lg:py-3"
            />
          </div>
        )}
      </CenterCardContainer>
    </PageCenter>
  )
}

export default HomeScreen