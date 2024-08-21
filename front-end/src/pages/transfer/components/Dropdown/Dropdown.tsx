import dropdownStyles from '../styles/dropdown.module.css'
import {v4} from 'uuid'
import checkIfEmpty from "./utils/checkIfEmpty.ts";
import DropdownInputComponent from "./components/DropdownInputComponent.tsx";
import {useAppDispatch, useAppSelector} from "../../../../states/hooks.ts";
import {addDropdownInput, setOpenForInput} from "../../../../states/features/dropdownSlice.ts";
import AddLocationSVG from '../../../../assets/icons/add-location.svg'


export default function Dropdown() {
    const dropdownDispatch = useAppDispatch()
    const {dropdownInputs} = useAppSelector(s => s.dropdown)
    return <section className={dropdownStyles['dropdownWrapper']}>
        <div className={dropdownStyles['transfersContainer']}>
            {dropdownInputs.map((input, i) => <DropdownInputComponent key={v4()} currentInput={input} index={i}
                                                                      totalLength={dropdownInputs.length}/>)}

            <button className={dropdownStyles['addDestination']}
                    onClick={() => {
                        const empty = checkIfEmpty(dropdownInputs)
                        if(!empty) {
                            dropdownDispatch(addDropdownInput({
                                id: v4(),
                                value: undefined
                            }))
                        }else {
                            dropdownDispatch(setOpenForInput({id: empty, alert: true}))
                        }


                    }}>
                <img src={AddLocationSVG} width={24} alt={'Additional Location icon'}/>
                <span> Add
                Destination</span>
            </button>
        </div>


    </section>
}