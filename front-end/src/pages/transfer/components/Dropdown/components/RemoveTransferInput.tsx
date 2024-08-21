import {removeDropdownInput} from "../../../../../states/features/dropdownSlice.ts";
import dropdownStyles from "../../styles/dropdown.module.css";
import CloseSVG from "../../../../../assets/icons/close.svg";
import {useAppDispatch} from "../../../../../states/hooks.ts";
import {TDropdownInput} from "../../../../../types/transfers/dropdown.ts";

export default function RemoveTransferInput({isLast, totalLength, currentInput}: {
    isLast: boolean,
    totalLength: number,
    currentInput: TDropdownInput
}) {
    const dispatch = useAppDispatch()

    return isLast && totalLength > 2 &&
        <button onClick={() => dispatch(removeDropdownInput(currentInput))}
                title={'Remove current location'}
                className={dropdownStyles['removeInput']}><img src={CloseSVG} width={24} alt={'Close icon'}/>
        </button>
}