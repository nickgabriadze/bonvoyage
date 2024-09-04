import {RefObject, useEffect, useRef} from "react";

export function useCalendarClickOutside(btn: RefObject<HTMLButtonElement>, handler: () => void){
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleOutsideClick = (event:any) => {
            if(!btn.current?.contains(event.target) && !ref.current?.contains(event.target)){
                handler()
            }
        }
        window.addEventListener('mousedown', handleOutsideClick);

        return () => {
            window.removeEventListener('mousedown', handleOutsideClick);
        }
    }, [btn, handler])

    return ref
    
}