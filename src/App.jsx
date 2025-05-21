import { useState } from 'react'
import './App.css'
import ReviewSection from './component/ReviewSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Review Section</h1>
      <ReviewSection />
    </div>

    </>
  )
}

export default App
