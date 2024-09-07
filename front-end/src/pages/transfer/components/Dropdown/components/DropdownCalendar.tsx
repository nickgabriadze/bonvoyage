import Calendar from "../../../../../components/Calendar.tsx";
import dropdownCalendarStyles from './../../styles/dropdown.calendar.module.css'
import {useEffect, useRef, useState} from "react";
import CalendarSVG from '/icons/calendar/calendar.svg'
import CalendarFilledSVG from '/icons/calendar/calendar-filled.svg'
import {useAppSelector} from "../../../../../states/hooks.ts";
import {useCalendarClickOutside} from "../../../../../components/calendar/useCalendarClickOutside.tsx";


export default function DropdownCalendar() {
    const {openForInput, scheduled} = useAppSelector(s => s.dropdown)
    const [open, setOpen] = useState(false)
    useEffect(() => {
        if (openForInput.id !== undefined) {
            setOpen(false)
        }
    }, [openForInput.id])

    const buttonRef = useRef<HTMLButtonElement>(null)
    const click = useCalendarClickOutside(buttonRef, () => setOpen(false))
    return <section className={dropdownCalendarStyles['calendarWrapper']}

    >
        <button
            ref={buttonRef}
            onClick={() => setOpen((prev) => !prev)} className={dropdownCalendarStyles['datePicker']}>
            <img src={open ? CalendarSVG : CalendarFilledSVG} alt={'Calendar icon'}/>
            <h4>{scheduled !== undefined ? `${scheduled.day}/${scheduled.month}/${scheduled.year}`:'Choose date'}</h4>
        </button>
        {open && <div  ref={click} className={dropdownCalendarStyles['calendar']}><Calendar/></div>}
    </section>

}