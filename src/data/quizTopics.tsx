import { ReactNode } from 'react'
import English from '../assets/icons/english.svg?react'
import Math from '../assets/icons/math.svg?react'
import Reasoning from '../assets/icons/reasoning.svg?react'
import Gk from '../assets/icons/gk.svg?react'
import Question from '../assets/icons/question.svg?react'

type QuizTopic = {
  title: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
  {
    title: 'Set 1',
    icon: <Question />
  },
  {
    title: 'Set 2',
    icon: <Question />
  },
  {
    title: 'Set 3',
    icon: <Question />
  },
  {
    title: 'Set 4',
    icon: <Question />
  },
  {
    title: 'Set 5',
    icon: <Question />
  },
  {
    title: 'English',
    icon: <English />,
  },
  {
    title: 'Math',
    icon: <Math />,
  },
  {
    title: 'Reasoning',
    icon: <Reasoning />,
  },
  {
    title: 'General Knowledge',
    icon: <Gk />,
  }
]
