import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { PrincePage } from './pages/PrincePage'
import './App.scss'
import { Header } from './components/Header/Header'
import { PrincePortrait } from './components/PrincePortrait/PrincePortrait'
import { RouterProvider } from 'react-router-dom';
import {router} from './router'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

