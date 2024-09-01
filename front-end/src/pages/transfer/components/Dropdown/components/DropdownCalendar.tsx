import Calendar from "../../../../../components/Calendar.tsx";
import dropdownCalendarStyles from './../../styles/dropdown.calendar.module.css'
import {useEffect, useState} from "react";
import CalendarSVG from './../../../../../assets/icons/calendar/calendar.svg'
import CalendarFilledSVG from './../../../../../assets/icons/calendar/calendar-filled.svg'
import {useAppSelector} from "../../../../../states/hooks.ts";


export default function DropdownCalendar() {
    const {openForInput, scheduled} = useAppSelector(s => s.dropdown)
    const [open, setOpen] = useState(false)
    useEffect(() => {
        if (openForInput.id !== undefined) {
            setOpen(false)
        }
    }, [openForInput.id])


    return <section className={dropdownCalendarStyles['calendarWrapper']}>
        <button onClick={() => setOpen((prev) => !prev)} className={dropdownCalendarStyles['datePicker']}>
            <img src={open ? CalendarSVG : CalendarFilledSVG} alt={'Calendar icon'}/>
            <h4>{scheduled !== undefined ? `${scheduled.day}/${scheduled.month}/${scheduled.year}`:'Choose date'}</h4>
        </button>
        {open && <div className={dropdownCalendarStyles['calendar']}><Calendar/></div>}
    </section>

}