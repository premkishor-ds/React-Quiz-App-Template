import { FC } from 'react'

type ModalWrapperProps = {
  title: string
  subtitle: string
  icon: React.ReactNode
  buttonTitle: string
  onClick: () => void
  onClose?: () => void
  cancelTitle?: string
}

const ModalWrapper: FC<ModalWrapperProps> = ({
  title,
  subtitle,
  icon,
  buttonTitle,
  onClick,
  onClose,
  cancelTitle
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md text-center shadow-lg">
        <div className="mb-4 flex justify-center text-blue-600 text-3xl">{icon}</div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{subtitle}</p>
        <div className="flex justify-center gap-4">
          {cancelTitle && onClose && (
            <button
              onClick={onClose}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
            >
              {cancelTitle}
            </button>
          )}
          <button
            onClick={onClick}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {buttonTitle}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalWrapper
