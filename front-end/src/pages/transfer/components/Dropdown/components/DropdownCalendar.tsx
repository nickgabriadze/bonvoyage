import Calendar from "../../../../../components/Calendar.tsx";
import dropdownCalendarStyles from './../../styles/dropdown.calendar.module.css'
import {useState} from "react";
import CalendarSVG from './../../../../../assets/icons/calendar/calendar.svg'
import CalendarFilledSVG from './../../../../../assets/icons/calendar/calendar-filled.svg'


export default function DropdownCalendar() {
    const [open, setOpen] = useState(false)

    return <section className={dropdownCalendarStyles['calendarWrapper']}>
        <button onClick={() => setOpen((prev) => !prev)} className={dropdownCalendarStyles['datePicker']}>
            <img src={open ? CalendarSVG : CalendarFilledSVG} alt={'Calendar icon'}/>
            <h4>Choose date</h4>
        </button>
        {open && <div className={dropdownCalendarStyles['calendar']}><Calendar/></div>}
    </section>

}