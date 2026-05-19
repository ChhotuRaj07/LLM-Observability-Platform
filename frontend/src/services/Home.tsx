mport { useEffect, useState } from 'react'
import { useEffect, useState } from 'react'
import { getLLMModels } from '../services/api'

const Home = () => {
    const [Model,setModel] = useState([])

    useEffect(() =>{
        getLLMModels()
        .then
    }
    )


}