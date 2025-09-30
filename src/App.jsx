import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Email:', email, 'Password:', password)
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full mx-4">
          <div className="flex">
            
            {/* Bagian Kiri */} 
            <div className="w-1/2 bg-gray-300 flex items-center justify-center">
              <div className="w-full h-96 bg-gray-150 flex items-center justify-center">
                <span className="text-gray-600 text-6xl font-bold">600 × 500</span>
              </div>
            </div>

            {/* Bagian Kanan */} 
            <div className="w-1/2 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Login</h2>  
              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>  
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div> 

                {/* Bagian Button */}           
                <button type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200 font-medium">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App