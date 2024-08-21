import {useEffect, useRef} from "react";
import {useAppSelector} from "../../../../../states/hooks.ts";

export default function useClickOutside(inputID: string, handler: () => void) {
    const ref = useRef<HTMLDivElement>(null)
    const {openForInput} = useAppSelector(s => s.dropdown)

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (openForInput === inputID && event.target.localName !== 'input' && !ref.current?.contains(event.target)) {
                {
                    handler()
                }

            }
        }


        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }

    }, [ref.current])

    return ref
}
