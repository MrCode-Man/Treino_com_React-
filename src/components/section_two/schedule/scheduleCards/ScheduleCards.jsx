import './ScheduleCards.css'

function ScheduleCards() {
    return (
        <ul className="schedule_ul">
            <li className="schedule_card">
                <h3>Monday</h3>
                <p>4-7pm</p>
            </li>
            <li className="schedule_card">
                <h3>Wednesday</h3>
                <p>1-3pm <br></br> 4-7pm</p>
            </li>
            <li className="schedule_card">
                <h3>Thursday</h3>
                <p>1-7pm</p>
            </li>
        </ul>
    )
}

export default ScheduleCards;
