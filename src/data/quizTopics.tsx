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
    title: 'English',
    icon: <English />,
  },
  {
    title: 'General Knowledge',
    icon: <Gk />,
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
    title: 'Set 6',
    icon: <Question />
  },
  {
    title: 'Set 7',
    icon: <Question />
  },
  {
    title: 'Set 8',
    icon: <Question />
  },
  {
    title: 'Set 9',
    icon: <Question />
  },
  {
    title: 'Set 10',
    icon: <Question />
  },
  {
    title: 'English Set 1',
    icon: <English />
  },
  {
    title: 'English Set 2',
    icon: <English />
  },
  {
    title: 'English Set 3',
    icon: <English />
  },
  {
    title: 'English Set 4',
    icon: <English />
  },
  {
    title: 'English Set 5',
    icon: <English />
  },
  {
    title: 'General Knowledge Set 1',
    icon: <Gk />
  },
  {
    title: 'General Knowledge Set 2',
    icon: <Gk />
  },
  {
    title: 'General Knowledge Set 3',
    icon: <Gk />
  },
  {
    title: 'General Knowledge Set 4',
    icon: <Gk />
  },
  {
    title: 'General Knowledge Set 5',
    icon: <Gk />
  },
  {
    title: 'Math Set 1',
    icon: <Math />
  },
  {
    title: 'Math Set 2',
    icon: <Math />
  },
  {
    title: 'Math Set 3',
    icon: <Math />
  },
  {
    title: 'Math Set 4',
    icon: <Math />
  },
  {
    title: 'Math Set 5',
    icon: <Math />
  },
  {
    title: 'Reasoning Set 1',
    icon: <Reasoning />
  },
  {
    title: 'Reasoning Set 2',
    icon: <Reasoning />
  },
  {
    title: 'Reasoning Set 3',
    icon: <Reasoning />
  },
  {
    title: 'Reasoning Set 4',
    icon: <Reasoning />
  },
  {
    title: 'Reasoning Set 5',
    icon: <Reasoning />
  },
  {
    title: 'English Advance Set 1',
    icon: <English />
  },
  {
    title: 'General Knowledge Advance Set 1',
    icon: <Gk />
  },
  {
    title: 'Math Advance Set 1',
    icon: <Math />
  },
  {
    title: 'Reasoning Advance Set 1',
    icon: <Reasoning />
  },
]
