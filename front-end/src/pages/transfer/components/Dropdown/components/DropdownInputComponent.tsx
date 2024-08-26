import dropdownStyles from "../../styles/dropdown.module.css";
import {TDropdownInput} from "../../../../../types/transfers/dropdown.ts";
import DropdownPlaces from "./DropdownPlaces.tsx";
import {useAppDispatch, useAppSelector} from "../../../../../states/hooks.ts";
import {
    setOpenForInput
} from "../../../../../states/features/dropdownSlice.ts";
import {useEffect, useRef, useState} from "react";
import RemoveTransferInput from "./RemoveTransferInput.tsx";
import RemoveTransferLocation from "./RemoveTransferLocation.tsx";
import TransferTypeIndicator from "./TransferTypeIndicator.tsx";
import useClickOutside from "../utils/useClickOutside.ts";
import DropdownInput from './DropdownInput.tsx'


export default function DropdownInputComponent({index, totalLength, currentInput}: {
    index: number,
    totalLength: number,
    currentInput: TDropdownInput,
}) {


    const dispatch = useAppDispatch()

    const {openForInput} = useAppSelector(s => s.dropdown)
    const [searchingFor, setSearchingFor] = useState<string>(currentInput.value === undefined ? '' : String(currentInput.value))
    const inputRef = useRef<HTMLInputElement>(null);
    const isLast = totalLength - 1 === index


    const clickOutsideRef = useClickOutside(currentInput.id, () => dispatch(setOpenForInput({id: undefined})))

    /* this piece of code is important, because input loses focus when the dropdown opens */
    useEffect(() => {
        if (openForInput.id === currentInput.id && inputRef.current) {
            inputRef.current.focus();
        }
    }, [currentInput.id, openForInput.id]);


    return <div key={currentInput.id} className={dropdownStyles['transferInput']}
                ref={clickOutsideRef}

    >

        <TransferTypeIndicator index={index} isLast={isLast}/>
        <div

            className={dropdownStyles['inputWrapper']}>
            <DropdownInput inputRef={inputRef} currentInput={currentInput} searchingFor={searchingFor}
                           setSearchingFor={setSearchingFor}/>

            {openForInput?.id === currentInput.id &&
                <DropdownPlaces searchingFor={searchingFor}/>}
        </div>

        <RemoveTransferLocation currentInput={currentInput}/>
        <RemoveTransferInput isLast={isLast} totalLength={totalLength} currentInput={currentInput}/>

    </div>

}