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

  if (loading) return <h2 style={{textAlign:'center'}}>Loading...</h2>

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🤖 LLM Models</h1>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {models.length === 0 ? (
          <p>Koi data nahi hai!</p>
        ) : (
          models.map((model: LLMModel) => (
            <div key={model.id} style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              width: '200px',
              boxShadow: '2px 2px 8px rgba(0,0,0,0.1)'
            }}>
              <h2>{model.name}</h2>
              <p>Provider: {model.provider}</p>
              <p>Status: {model.is_active ? '✅ Active' : '❌ Inactive'}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Home