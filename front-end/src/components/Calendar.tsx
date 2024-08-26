import calendarStyles from './calendar/calendar.module.css'
import LeftArrowSVG from './../assets/icons/calendar/arrow-left.svg'
import RightArrowSVG from './../assets/icons/calendar/arrow-right.svg'
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../states/hooks.ts";
import {setScheduled} from "../states/features/dropdownSlice.ts";

export default function Calendar() {
    const [date, setDate] = useState(new Date());
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const presentMonth = months[date.getMonth()].slice(0, 3)
    const presentYear = date.getFullYear();
    const nDaysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay()
    const presentDay = presentMonth === months[new Date().getMonth()].slice(0, 3) ? new Date().getDate() : date.getDate()


    const {scheduled} = useAppSelector(s => s.dropdown)
    const dispatch = useAppDispatch()


    return <section className={calendarStyles['calendarWrapper']}>
        <div className={calendarStyles['monthYearWrapper']}>
            <div>
                <button
                    onClick={() => {
                        const d = new Date()
                        if (date.getMonth() > d.getMonth() || date.getFullYear() > d.getFullYear()) {
                            setDate(new Date(presentYear, date.getMonth() - 1))
                        }
                    }}
                ><img width={30} src={LeftArrowSVG} alt={'Left arrow icon'}/></button>
                <div className={calendarStyles['monthYear']}>
                    <h2>{presentYear}</h2>
                    <h3>{presentMonth}.</h3>
                </div>
                <button
                    onClick={() => {
                        setDate(new Date(presentYear, date.getMonth() + 1))
                    }}
                ><img width={30} src={RightArrowSVG} alt={'Right arrow icon'}/></button>
            </div>

        </div>

        <div className={calendarStyles['weekDays']}>
            <div>{days.map((d, i) => <h4 key={i}>{d.slice(0, 3)}</h4>)}</div>

        </div>


        <div className={calendarStyles['days']}>{
            Array.from({length: nDaysInMonth}).map((_, i) => {
                const day = i - firstDay + 1

                const specifiedDay = scheduled && presentMonth === scheduled.month.slice(0,3) && String(day) === scheduled.day && String(presentYear) === scheduled.year
                return day < 1 ? <span key={`empty-cell${i}`}></span> :
                    day < presentDay ? <span
                            key={`passed-day${i}`}
                            className={calendarStyles['passedDay']}>{day}</span> :
                        <span
                            onClick={() => dispatch(setScheduled(scheduled === undefined || !specifiedDay ? {
                                year: String(presentYear),
                                month: months[date.getMonth()],
                                day: String(day)
                            } : undefined))}
                            key={`available-day${i}`}
                            className={`${specifiedDay ? calendarStyles['specifiedDay'] : calendarStyles['dayNumber']} `}>{day}</span>
            })
        }</div>

    </section>
}