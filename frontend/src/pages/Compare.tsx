import { useState } from 'react'
import { compareLLMs } from '../services/api'

const Compare = () => {
  const [prompt, setPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handleCompare = () => {
    if (!prompt.trim()) return
    setLoading(true)
    compareLLMs(prompt)
      .then(response => {
        setResults(response.data)
        setLoading(false)
      })
      .catch(error => {
        console.log('Error:', error)
        setLoading(false)
      })
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        🔍 Compare LLM Models
      </h1>

      <div className="max-w-2xl mx-auto mb-8">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Apna question yahan likho..."
          className="w-full p-4 rounded-lg border border-gray-300 shadow-sm"
          rows={3}
        />
        <button
          onClick={handleCompare}
          disabled={loading}
          className="mt-3 w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? 'Comparing...' : 'Compare Karo 🚀'}
        </button>
      </div>

      {results && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Object.entries(results.results.results).map(([key, value]: [string, any]) => (
            <div key={key} className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-bold text-blue-600 mb-2 capitalize">
                {key === 'openai' ? '🤖 GPT' : key === 'gemini' ? '✨ Gemini' : '⚡ Groq'}
              </h2>
              {value.error ? (
                <p className="text-red-500 text-sm">{value.error}</p>
              ) : (
                <>
                  <p className="text-gray-700">{value.response}</p>
                  <p className="text-sm text-gray-400 mt-2">
                    ⏱ {value.response_time}s
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Compare