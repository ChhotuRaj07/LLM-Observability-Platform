import { useEffect, useState } from 'react'
import { getLLMModels } from '../services/api'

const Home = () => {
  const [models, setModels] = useState([])

  useEffect(() => {
    getLLMModels()
      .then(response => {
        setModels(response.data)
      })
  }, [])

  return (
    <div>
      <h1>LLM Models</h1>
      {models.map((model: any) => (
        <div key={model.id}>
          <h2>{model.name}</h2>
          <p>{model.provider}</p>
        </div>
      ))}
    </div>
  )
}

export default Home




// mport { useEffect, useState } from 'react'
// import { useEffect, useState } from 'react'
// import { getLLMModels } from '../services/api'

// const Home = () => {
//     const [Model,setModel] = useState([])

//     useEffect(() =>{
//         getLLMModels()
//         .then(Response.data)
//     }
//     )


// }