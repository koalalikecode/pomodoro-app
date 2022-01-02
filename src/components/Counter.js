import { CircularProgressbar } from 'react-circular-progressbar';
import { useState, useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/Progress.css'

function Counter({color, time, isBreak, onBreak}) {
    const [min, setMin] = useState(45);
    const [sec, setSec] = useState(0);
    const [state, setState] = useState('Start');

    useEffect(() =>{
        setMin(time)
        setSec(0)
    }, [time])
    function handleState() {
        if (state === 'Start') {
            setState('Pause')
        }else {
            setState('Start')
        }
    }
    useEffect(() => {
        if (state === 'Pause') {
            setTimeout(() => {
                if (sec === 0 && min === 0) {
                    onBreak(!isBreak)
                }else if (sec === 0 && min !== 0) {
                    setSec(59)
                    setMin(min - 1)
                }else {
                    setSec(sec - 1)
                }
            }, 1000)
        }
    }, [min, sec, state])
    return (
        <div className="counter">
            <CircularProgressbar value={(time-(min + sec/60))/time*100} text={sec >= 10 ? `${min}:${sec}` : `${min}:0${sec}`} background backgroundPadding={2} 
            styles={{
                path: {
                    stroke: color
                }
            }}
              />
            <button className="state-btn" onClick={handleState}>{state}</button>
        </div>
    )
}

export default Counter;