import dropdownStyles from '../styles/dropdown.module.css'
import {v4} from 'uuid'
import checkIfEmpty from "./utils/checkIfEmpty.ts";
import DropdownInputComponent from "./components/DropdownInputComponent.tsx";
import {useAppDispatch, useAppSelector} from "../../../../states/hooks.ts";
import {addDropdownInput} from "../../../../states/features/dropdownSlice.ts";

export default function Dropdown() {
    const dropdownDispatch = useAppDispatch()
    const {dropdownInputs} = useAppSelector(s => s.dropdown)
    return <section >
        <div className={dropdownStyles['transfersContainer']}>
        {dropdownInputs.map((input, i) => <DropdownInputComponent key={v4()} currentInput={input} index={i}
                                                                  totalLength={dropdownInputs.length}/>)}

        <button className={dropdownStyles['addDestination']}
                onClick={() => !checkIfEmpty(dropdownInputs) && dropdownDispatch(addDropdownInput({
                    id: v4(),
                    value: undefined
                }))}>
            Add
            Destination
        </button>
        </div>
    </section>
}