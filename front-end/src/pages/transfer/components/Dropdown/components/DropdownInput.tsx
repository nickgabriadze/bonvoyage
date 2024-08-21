import {setOpenForInput} from "../../../../../states/features/dropdownSlice.ts";
import {useAppDispatch, useAppSelector} from "../../../../../states/hooks.ts";
import React from "react";
import {TDropdownInput} from "../../../../../types/transfers/dropdown.ts";
import dropdownStyles from '../../styles/dropdown.module.css'

export default function DropdownInput({inputRef, currentInput, searchingFor, setSearchingFor}: {
    inputRef: React.RefObject<HTMLInputElement>,
    currentInput: TDropdownInput,
    searchingFor: string,
    setSearchingFor: React.Dispatch<React.SetStateAction<string>>
}) {
    const {openForInput} = useAppSelector(s => s.dropdown)
    const dispatch = useAppDispatch()

    return (<input value={openForInput?.id === currentInput.id ? searchingFor : currentInput.value}
                   ref={inputRef}
                   style={openForInput?.id === currentInput.id ? {
                       borderBottomLeftRadius: '0',
                       borderBottomRightRadius: '0',
                       outline: `1px solid ${openForInput.alert ? 'var(--color-main-navy-red)' : 'var(--color-main-deep-sea-navy)'}`
                   } : {}}
                   className={`${dropdownStyles['dropdownInput']} ${openForInput?.alert && dropdownStyles['dropdownInputAlert']}`}
                   onClick={() => dispatch(setOpenForInput({id: currentInput.id, alert: openForInput.id
                        === currentInput.id && Boolean(openForInput?.alert)}))}
                   onChange={(e) => {
                       setSearchingFor(e.target.value)
                   }}
                   placeholder={openForInput.alert? 'Please choose a location' : currentInput.start ? 'Where do you want to start from?' : 'Where do you want to go?'}/>)

}

