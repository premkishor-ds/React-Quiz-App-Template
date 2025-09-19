import { FC } from 'react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
}

const LoadingSpinner: FC<LoadingSpinnerProps> = ({ size = 'md', text }) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`animate-spin rounded-full border-b-2 border-theme-color ${sizeClasses[size]}`}></div>
      {text && (
        <p className="mt-2 text-secondary-text text-sm">{text}</p>
      )}
    </div>
  )
}

export default LoadingSpinner