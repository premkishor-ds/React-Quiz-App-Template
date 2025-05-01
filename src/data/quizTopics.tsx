import { ReactNode } from 'react'
import English from '../assets/icons/english.svg?react'
import Math from '../assets/icons/math.svg?react'
import Reasoning from '../assets/icons/reasoning.svg?react'
import Gk from '../assets/icons/gk.svg?react'

type QuizTopic = {
  title: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
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
