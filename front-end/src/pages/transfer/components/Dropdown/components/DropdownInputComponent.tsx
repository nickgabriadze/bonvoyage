import dropdownStyles from "../../styles/dropdown.module.css";
import {DropdownInput} from "../../../../../types/transfers/dropdown.ts";
import DropdownPlaces from "./DropdownPlaces.tsx";
import {useAppDispatch, useAppSelector} from "../../../../../states/hooks.ts";
import {
    setOpenForInput
} from "../../../../../states/features/dropdownSlice.ts";
import {useEffect, useRef, useState} from "react";
import RemoveTransferInput from "./RemoveTransferInput.tsx";
import RemoveTransferLocation from "./RemoveTransferLocation.tsx";
import TransferTypeIndicator from "./TransferTypeIndicator.tsx";

export default function DropdownInputComponent({index, totalLength, currentInput}: {
    index: number,
    totalLength: number,
    currentInput: DropdownInput,
}) {


    const dispatch = useAppDispatch()

    const {openForInput} = useAppSelector(s => s.dropdown)
    const [searchingFor, setSearchingFor] = useState<string>(currentInput.value === undefined ? '' : String(currentInput.value))
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null)
    const isLast = totalLength - 1 === index

    /* this piece of code is important, because input loses focus when the dropdown opens */
    useEffect(() => {
        if (openForInput === currentInput.id && inputRef.current) {
            inputRef.current.focus();
        }
    }, [openForInput]);

    return <div key={currentInput.id} className={dropdownStyles['transferInput']} ref={dropdownRef}>

        <TransferTypeIndicator index={index} isLast={isLast}/>
        <div
            className={dropdownStyles['inputWrapper']}>
            <input value={openForInput === currentInput.id ? searchingFor : currentInput.value}
                   ref={inputRef}
                   style={openForInput === currentInput.id ? {
                       borderBottomLeftRadius: '0',
                       borderBottomRightRadius: '0',
                       outline: '1px solid var(--color-main-deep-sea-navy)'
                   } : {}}
                   onClick={() => dispatch(setOpenForInput(currentInput.id))}
                   onChange={(e) => {
                       setSearchingFor(e.target.value)
                   }}
                   placeholder={currentInput.start ? 'Where do you want to start from?' : 'Where do you want to go?'}/>
            {openForInput === currentInput.id && <DropdownPlaces searchingFor={searchingFor}/>}
        </div>

        <RemoveTransferLocation currentInput={currentInput}/>
        <RemoveTransferInput isLast={isLast} totalLength={totalLength} currentInput={currentInput}/>

    </div>

}