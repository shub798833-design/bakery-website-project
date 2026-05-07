import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Gallery from './Pages/Gallery'
import Navbar from './components/navbar'


function App() {

  return (
    <div className="min-h-screen bg-orange-50">
      <Navbar />
      <main className="max-w-6xl mx-auto p-8">
         <header className="text-center mb-10">
            <h2 className="text-4xl font-mono text-orange-800 mt-15">Freshly Baked for You</h2>
            <div id='advertisment'><p id='advertismentcontent' className="text-red-600">ORDER TODAY FOR  LOCAL DELIVERY OR  PICKUP</p></div>
            
          </header>
        <Gallery/> 
      </main>
          
          

    </div>
    
    
          
  )
}

export default App
