import calendarStyles from './calendar/calendar.module.css'
import LeftArrowSVG from './../assets/icons/calendar/arrow-left.svg'
import RightArrowSVG from './../assets/icons/calendar/arrow-right.svg'
import {useState} from "react";

export default function Calendar() {
    const [date, setDate] = useState(new Date());
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentMonth = months[date.getMonth()].slice(0,3)
    const currentYear = date.getFullYear();
    const nDays = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()


    return <section className={calendarStyles['calendarWrapper']}>
        <div className={calendarStyles['monthYearWrapper']}>
            <div>
                <button
                    onClick={() => {
                        const d = new Date()
                        if(date.getMonth() > d.getMonth()) {
                            setDate(new Date(currentYear, date.getMonth() - 1))
                        }
                    }}
                ><img width={30} src={LeftArrowSVG} alt={'Left arrow icon'}/></button>
                <div className={calendarStyles['monthYear']}>
                    <h2>{currentYear}</h2>
                    <h3>{currentMonth}.</h3>
                </div>
                <button
                onClick={() => setDate(new Date(currentYear, date.getMonth()+1))}
                ><img width={30} src={RightArrowSVG} alt={'Right arrow icon'}/></button>
            </div>

        </div>

        <div className={calendarStyles['weekDays']}>
            {days.map((d, i) => <h4 key={i}>{d.slice(0, 3)}</h4>)}
        </div>

        <div className={calendarStyles['days']}>{Array.from({length: nDays + firstDay}).map((_, i) => <h5
            key={i}>{i + 1 - firstDay > 0 ? i + 1 - firstDay : ''}</h5>)}</div>
    </section>
}