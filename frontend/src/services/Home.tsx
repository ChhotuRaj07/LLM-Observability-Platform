import { useEffect, useState } from 'react'
import { getLLMModels } from '../services/api'

interface LLMModel {
  id: number
  name: string
  provider: string
  is_active: boolean
  created_at: string
}

const Home = () => {
  const [models, setModels] = useState<LLMModel[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getLLMModels()
      .then(response => {
        const data = Array.isArray(response.data)
          ? response.data
          : response.data.results || []
        setModels(data)
        setLoading(false)
      })
      .catch(error => {
        console.log('Error:', error)
        setLoading(false)
      })
  }, [])

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-xl font-bold text-gray-500">Loading...</p>
    </div>
  )

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        🤖 LLM Models
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {models.length === 0 ? (
          <p className="text-center text-gray-500">Koi data nahi hai!</p>
        ) : (
          models.map((model: LLMModel) => (
            <div key={model.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <h2 className="text-xl font-bold text-gray-800">{model.name}</h2>
              <p className="text-gray-500 mt-2">Provider: {model.provider}</p>
              <p className="mt-2">
                Status: {model.is_active
                  ? <span className="text-green-500 font-bold">✅ Active</span>
                  : <span className="text-red-500 font-bold">❌ Inactive</span>
                }
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Home