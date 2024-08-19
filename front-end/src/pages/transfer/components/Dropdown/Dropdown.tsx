import dropdownStyles from '../styles/dropdown.module.css'
import {v4} from 'uuid'
import checkIfEmpty from "./functions/checkIfEmpty.ts";
import DropdownInputComponent from "./components/DropdownInputComponent.tsx";
import {useAppDispatch, useAppSelector} from "../../../../states/hooks.ts";
import {addDropdownInput} from "../../../../states/features/dropdownSlice.ts";

export default function Dropdown() {
    const dropdownDispatch = useAppDispatch()
    const {dropdownInputs} = useAppSelector(s => s.dropdown)
    return <section className={dropdownStyles['transfersContainer']}>
        {dropdownInputs.map((input) => <DropdownInputComponent key={v4()} lenOfTransfers={dropdownInputs.length}
                                                               eachInput={input}/>)}

        <button className={dropdownStyles['addDestination']}
                onClick={() => !checkIfEmpty(dropdownInputs) && dropdownDispatch(addDropdownInput({
                    id: v4(),
                    value: ''
                }))}>
            Add
            Destination
        </button>

    </section>
}