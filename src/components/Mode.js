import '../styles/Mode.css'

function Mode({color, isBreak}) {
    return (
        <div className="mode">
            <div className="learn-mode mode-item" style={!isBreak ? {backgroundColor: color, color: "black"} : {}}>pomodoro</div>
            <div className="short-break-mode mode-item" style={isBreak ? {backgroundColor: color, color: "black"} : {}}>short break</div>
            <div className="long-break-mode mode-item">long break</div>
        </div>

    )
}

export default Mode