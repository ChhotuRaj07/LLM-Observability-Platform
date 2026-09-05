import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthForm from './pages/Login'
import Compare from './pages/Compare'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
