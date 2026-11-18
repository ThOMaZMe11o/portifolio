import { Routes, Route, Link } from 'react-router'
// import { useState } from 'react'
import './App.css'

function Home() {
  return (
    <h1>
      Ínicio
    </h1>
  )
}

export default function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Início</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
