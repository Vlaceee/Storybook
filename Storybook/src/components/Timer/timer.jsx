/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import React from 'react';
import './timer.css';

/*
 You can view the component via running npm run storybook or npm run dev in the terminal after you place yourself within appropriate folder
 The `Timer` component is a customizable countdown timer that displays elapsed time and time remaining. It accepts the following props:

 - `title` (default: "No Title"): A string that displays a title or label for the timer. It should be a non-empty string.
 If it’s not provided or is invalid, the component throws an error, ensuring the `title` is always present and valid.

-`endTime` (default: 0): A non-negative integer representing the total time for the countdown, specified in seconds.
  This value determines the starting point for the countdown, where 0 signifies that no time is allocated.
   The timer only supports a maximum of 59 minutes and 59 seconds (3599 seconds), and if a value greater than this is passed, 
   an error is thrown. This ensures the timer stays within a manageable range.

- `elapsedTime` (default: 0): A non-negative integer that indicates how much time has already passed when the timer begins. 
  This allows the timer to start from a specific elapsed time rather than from zero, which is useful for resuming from a 
  paused state or syncing with an existing timer. If the value is greater than `endTime`, an error is thrown */

export default function Timer({ title="No Title", endTime=0, elapsedTime = 0 }) {
    const timelimit = 3600;
    const [errorMessage, setErrorMessage] = useState('');
    const [timeLeft, setTimeLeft] = useState(0);
    const [borderPercentage, setBorderPercentage] = useState(0);
    const [countUp, setCountUp] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [hasEnded, setHasEnded] = useState(false);

    const validateProps = () => {
        if (!title || typeof title !== 'string') {
            const error = "Title must be a non-empty string.";
            console.error(error);
            setErrorMessage(error);
            throw new Error(error); 
        }
        
        if (!Number.isFinite(endTime) || endTime < 0) {
            const error = "endTime must be a non-negative integer.";
            console.error(error);
            setErrorMessage(error);
            throw new Error(error);
        }
        
        if (endTime >= timelimit) {
            const error = "The timer supports a maximum of 59 minutes and 59 seconds.";
            console.error(error);
            setErrorMessage(error);
            throw new Error(error);
        }
        
        if (isNaN(elapsedTime) || elapsedTime < 0 || elapsedTime > endTime) {
            const error = "elapsedTime must be a non-negative integer smaller than the time limit.";
            console.error(error);
            setErrorMessage(error);
            throw new Error(error); 
        }
        setErrorMessage('');
        return true;
    };

    useEffect(() => {
        validateProps();
        setCountUp(elapsedTime);
        setTimeLeft(endTime - elapsedTime);
    }, []);



    useEffect(() => {
        if (timeLeft === 0) {
            setHasEnded(true);
          
        }
        else{
            setHasEnded(false);
        }
    }, [timeLeft]);

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            const interval = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev - 1 <= 0) {
                        setHasEnded(true);
                        setIsRunning(false);
                        return 0;
                    }
                    return prev - 1;
                });
                setCountUp((prev) => prev + 1);
            }, 1000);
            return () => clearInterval(interval);
        }
      
    }, [isRunning, timeLeft]);

    useEffect(() => {
        const percentagePassed = ((endTime - timeLeft) / endTime) * 100;
        setBorderPercentage(percentagePassed);
    }, [timeLeft, endTime]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    const handleStart = () => {
        setIsRunning(true);
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setCountUp(0);
        setTimeLeft(endTime);
        setBorderPercentage(0);
        setHasEnded(false);
    };

    return (
        <div className='component-div'>
            <div className='clock-div'>
                <div
                    className={`circle ${hasEnded ? 'alternate' : ''}`}
                    style={{
                        background: hasEnded
                            ? null
                            : `conic-gradient(
                                ${borderPercentage < 100 ? '#67cb88' : '#cb6767'} 0% ${borderPercentage}%,
                                #545576 ${borderPercentage}% 100%
                            )`
                    }}
                >
                    <div className="inner-circle">
                        <div className="title">{title}</div>
                        <div className="countup">{formatTime(countUp)}</div>
                        <div className="countdown">{formatTime(timeLeft)} left</div>
                    </div>
                </div>
            </div>
            <div className='button-div'>
                <button className='button' style={{ marginLeft: '25px' }} onClick={handleStart}>Start</button>
                <button className='button' onClick={handlePause}>Pause</button>
                <button className='button' style={{ marginRight: '25px' }} onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}
