import { useState } from 'react'
import { useQuizHistory } from '../../hooks/useQuizHistory'
import { useQuiz } from '../../context/QuizContext'
import { ScreenTypes } from '../../types'
import Button from '../ui/Button'
import PageCenter from '../ui/PageCenter'

const HistoryScreen: React.FC = () => {
  const { history, loading, error, fetchHistory, deleteResult } = useQuizHistory()
  const { setCurrentScreen, selectQuizTopic } = useQuiz()
  const [filter, setFilter] = useState({ subject: '', topic: '' })

  const handleFilter = () => {
    fetchHistory({
      subject: filter.subject || undefined,
      topic: filter.topic || undefined,
      sortBy: 'createdAt',
      sortOrder: 'desc'
    })
  }

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this result?')) {
      try {
        await deleteResult(id)
      } catch (err) {
        alert('Failed to delete result')
      }
    }
  }

  const goHome = () => {
    setCurrentScreen(ScreenTypes.QuizTopicsScreen)
  }

  return (
    <PageCenter>
      <div className="w-full max-w-6xl mx-auto p-2 sm:p-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6 gap-2">
          <h1 className="text-xl sm:text-3xl font-bold">Quiz History</h1>
          <div className="flex gap-2">
            <Button text="New Quiz" onClick={goHome} className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2" />
            <Button text="← Home" onClick={goHome} className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2" />
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 shadow">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-stretch sm:items-end">
            <div className="flex-1">
              <label className="block text-xs sm:text-sm font-medium mb-1">Subject</label>
              <input
                type="text"
                value={filter.subject}
                onChange={(e) => setFilter(prev => ({ ...prev, subject: e.target.value }))}
                className="w-full border rounded px-2 sm:px-3 py-1 sm:py-2 text-sm"
                placeholder="Filter by subject"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs sm:text-sm font-medium mb-1">Topic</label>
              <input
                type="text"
                value={filter.topic}
                onChange={(e) => setFilter(prev => ({ ...prev, topic: e.target.value }))}
                className="w-full border rounded px-2 sm:px-3 py-1 sm:py-2 text-sm"
                placeholder="Filter by topic"
              />
            </div>
            <div className="flex gap-2">
              <Button text="Filter" onClick={handleFilter} className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2" />
              <Button 
                text="Clear" 
                onClick={() => {
                  setFilter({ subject: '', topic: '' })
                  fetchHistory({ sortBy: 'createdAt', sortOrder: 'desc' })
                }}
                className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        {loading && <div className="text-center py-8">Loading...</div>}
        {error && <div className="text-red-500 text-center py-8">{error}</div>}
        
        {!loading && !error && (
          <div className="grid gap-3 sm:gap-4">
            {history.length === 0 ? (
              <div className="text-center py-6 sm:py-8 text-gray-500">No quiz history found</div>
            ) : (
              history.map((result) => (
                <div key={result._id} className="bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 shadow">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-base sm:text-lg">{result.subject} - {result.topic}</h3>
                      <p className="text-sm text-gray-600">Set: {result.set}</p>
                      <p className="text-sm text-gray-600">User: {result.user_name}</p>
                      <p className="font-semibold text-green-600">Score: {result.score}</p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {new Date(result.createdAt || '').toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto">
                      <Button 
                        text="Retake" 
                        onClick={() => {
                          selectQuizTopic(result.topic)
                          setCurrentScreen(ScreenTypes.QuizDetailsScreen)
                        }}
                        className="text-blue-600 hover:bg-blue-50 flex-1 sm:flex-none text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2"
                      />
                      <Button 
                        text="Delete" 
                        onClick={() => handleDelete(result._id!)}
                        className="text-red-600 hover:bg-red-50 flex-1 sm:flex-none text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2"
                      />
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </PageCenter>
  )
}

export default HistoryScreen