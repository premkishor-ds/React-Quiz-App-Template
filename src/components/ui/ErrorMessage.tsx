import { FC } from 'react'

interface ErrorMessageProps {
  message: string
  onRetry?: () => void
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="bg-danger-light border border-danger text-danger px-4 py-3 rounded-lg">
      <div className="flex items-center justify-between">
        <span>{message}</span>
        {onRetry && (
          <button
            onClick={onRetry}
            className="ml-4 text-sm underline hover:no-underline"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  )
}

export default ErrorMessage