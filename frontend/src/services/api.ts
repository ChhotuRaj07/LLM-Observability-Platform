import axios from 'axios'

const API = axios.create({
    baseURL: 'http//localhost:8000',
})

//LLM Models

export const getLLMModel = () => API.get('/api/llmmodels')
export const createLLMModel = (data: any) => API.post('api/llmodel/',data)  

// Prompts 
export const getPrompts = () => API.get('/api/prompts')
export const createPrompts = (data : any) => API.post('api/prompts', data)

//outputs 

export const getOutputs = () => API.get('/api/outputs')

//Evalutions

export const getEvaluations = () => API.get('/api/evalutions')

export default API;