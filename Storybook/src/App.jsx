<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';


=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
>>>>>>> bccce754eeaeef003b08143f41b2a42e11879a02
import './App.css'
import Timer from './components/Timer/timer'

function App() {
<<<<<<< HEAD

=======
>>>>>>> bccce754eeaeef003b08143f41b2a42e11879a02
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{
            width: '100vh',
<<<<<<< HEAD
            height: '100vh', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#393a3b' 
=======
            height: '100vh', // Use 100vh for full height of the viewport
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#393a3b' // Optional: Background color for the whole viewport
>>>>>>> bccce754eeaeef003b08143f41b2a42e11879a02
        }}>
            <div style={{
                width: '425px',
                height: '425px',
                
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
<<<<<<< HEAD
                backgroundColor: '#393a3b' 
=======
                backgroundColor: '#393a3b' // Optional: Background color for the Timer container
>>>>>>> bccce754eeaeef003b08143f41b2a42e11879a02
            }}>
                <Timer title="Title from Props" endTime={1500} elapsedTime={0} />
            </div>
        </div>
    </>
  )
}

export default App
