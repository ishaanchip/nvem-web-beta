import { useState } from 'react'
import './App.css'
import Router from './Router'
import BackgroundGradient from './components/BackgroundGradient'
import { Toaster } from './components/ui/toaster'

function App() {

  return (
    <div>
      <BackgroundGradient />
      <Router></Router>
      <Toaster />
    </div>
  )
}

export default App
