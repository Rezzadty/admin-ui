import React from 'react'
import UserCard from './UserCard'

function Exercise() {
  return (
    <>
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
             User Cards
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <UserCard 
                name ="Remi" 
                email ="remi@example.com"
                street =" 5 Chome-11-1 Miyamachi"
                city =" Aoba Ward, Sendai"
                />
                <UserCard 
                name ="Sumi" 
                email ="sumi@example.com"
                street =" 1 Chome-1-12 Nakae" 
                city ="Aoba Ward, Sendai"
                />
                <UserCard 
                name ="Riko" 
                email ="Riko@example.com" 
                street =" J5-chōme-10-10 Miya-machi"
                city ="Aoba Ward, Sendai"
                />
            </div>
      </div>
    </>
  )
}

export default Exercise