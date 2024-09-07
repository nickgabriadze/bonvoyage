import {removeSelectedLocation} from "../../../../../states/features/dropdownSlice.ts";
import dropdownStyles from "../../styles/dropdown.module.css";
import ClearInputSVG from "/icons/dropdown/remove.svg";
import {useAppDispatch, useAppSelector} from "../../../../../states/hooks.ts";
import {TDropdownInput} from "../../../../../types/transfers/dropdown.ts";

export default function RemoveTransferLocation({currentInput}: { currentInput: TDropdownInput }) {
    const dispatch = useAppDispatch()
    const {openForInput} = useAppSelector(s => s.dropdown)

    return currentInput.value && openForInput.id === currentInput.id && <button
        onClick={() => dispatch(removeSelectedLocation({
            id: currentInput.id,
            location: String(currentInput.value)
        }))}
        title={'Clear previous location'}
        className={dropdownStyles['removeInput']}><img src={ClearInputSVG} width={24} alt={"Clear input"}/>
    </button>
}