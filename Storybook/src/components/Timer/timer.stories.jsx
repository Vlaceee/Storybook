import React from 'react'
import Timer from './timer.jsx'

export default {
    title: 'Components/Timer',
    component: Timer  
}

export const Primary = () => (
    <div style={{  
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '425px', 
        height: '425px',  
        border: '1px solid black', 
        backgroundColor: '#393a3b' 
    }}>
        <Timer title="Title from Props" endTime={1500} elapsedTime={307}/>
    </div>
);
