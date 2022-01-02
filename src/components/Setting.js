import { useState, useEffect } from 'react'
import setting_icon from '../setting-icon.png' 
import '../styles/Setting.scss'
import arrow from '../icon-arrow-dark.svg'
import close from '../icon-close.svg'

function Setting({onColor, onTime, isBreak}) {
    const colors = ["#fd6e71", "#72F1F7", "#DB80FB"]
    const [setting, setSetting] = useState(false)
    const [activeColor, setActiveColor] = useState(0)
    const [learnTime, setLearnTime] = useState(45)
    const [shortBreak, setShortBreak] = useState(10)

    function handleApply() {
        onColor(colors[activeColor])
        if (!isBreak){
            onTime(learnTime)
        }else {
            onTime(shortBreak)
        }
    }
    useEffect(() => {
        if (!isBreak){
            onTime(learnTime)
        }else {
            onTime(shortBreak)
        }
    }, [isBreak])
    return (
        <footer className="footer">
            <img className="setting-icon" src={setting_icon} alt="setting icon" onClick = {() => setSetting(true)}/>
            { setting &&
            <div className="setting">
                <div className="setting-header">
                    <h2 className="setting-title">Settings</h2>
                    <img src={close} alt="close icon" onClick = {() => setSetting(false)}/>
                </div>
                <div className="time-container">
                    <h3>TIME (MINUTES)</h3>
                    <div className="time-mode">
                        <div className="time-mode-item">
                            <h4>pomodoro</h4>
                            <div>
                                <p className="time-input">{learnTime}</p>
                                <div className="arrow">
                                    <img className="arrow-up" src={arrow} alt="arrow" onClick={() => setLearnTime(learnTime + 5)}/>
                                    <img className="arrow-down" src={arrow} alt="arrow" onClick = {() => learnTime > 15 ? setLearnTime(learnTime - 5) : setLearnTime(15)}/>
                                </div>
                            </div>
                        </div>
                        <div className="time-mode-item">
                            <h4>short break</h4>
                            <div>
                                <p className="time-input">{shortBreak}</p>
                                <div className="arrow">
                                    <img className="arrow-up" src={arrow} alt="arrow" onClick={() => setShortBreak(shortBreak + 5)}/>
                                    <img className="arrow-down" src={arrow} alt="arrow" onClick = {() => shortBreak > 5 ? setShortBreak(shortBreak - 5) :  setShortBreak(5)}/>
                                </div>
                            </div>
                        </div>
                        <div className="time-mode-item">
                            <h4>long break</h4>
                            <div>
                                <p className="time-input">15</p>
                                <div className="arrow">
                                    <img className="arrow-up" src={arrow} alt="arrow" />
                                    <img className="arrow-down" src={arrow} alt="arrow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="font-container">
                    <h3>FONT</h3>
                    <div className="font-mode">
                        <button className="font-item font-1">Aa</button>
                        <button className="font-item font-2">Aa</button>
                        <button className="font-item font-3">Aa</button>
                    </div>
                </div>
                <div className="color-container">
                    <h3>COLOR</h3>
                    <div className="color-mode">
                        {colors.map((color, index) => <button className={`${index === activeColor ? "color-active" : ""} color-item color-${index}`} key={index} style={{backgroundColor: color}} onClick={() => setActiveColor(index)}></button>)}
                    </div>
                </div>
                <button className="apply" style={{backgroundColor: colors[activeColor]}} onClick={handleApply}>Apply</button>
            </div>}
        </footer>
    )
}

export default Setting
