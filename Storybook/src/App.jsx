/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';


import './App.css'
import Timer from './components/Timer/timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{
            width: '100vh',
            height: '100vh', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#393a3b' 
        }}>
            <div style={{
                width: '425px',
                height: '425px',
                
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#393a3b' 
            }}>
                <Timer title="Title from Props" endTime={1500} elapsedTime={0} />
            </div>
        </div>
    </>
  )
}

export default App
