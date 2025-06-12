import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Welcome from './pages/Welcome.tsx'
import Projects from './pages/Projects.tsx'
import Hobbies from './pages/Hobbies.tsx'
import About from './pages/About.tsx'
import Home from './pages/Home.tsx'
import Contact from './pages/Contact.tsx'
import { Route } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hobbies />
  </StrictMode>,
)
