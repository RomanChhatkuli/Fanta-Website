import React from 'react'
import { Analytics } from "@vercel/analytics/react"
import HomePage from './HomePage'

const App = () => {
  return (
    <div className='overflow-x-hidden'>
    <Analytics />
    <HomePage/>
    </div>
  )
}

export default App