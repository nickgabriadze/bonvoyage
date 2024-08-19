import dropdownStyles from "../styles/dropdown.module.css";
import CloseSVG from "../../../../assets/icons/close.svg";
import {DropdownInput} from "../../../../types/transfers/dropdown.ts";
import DropdownPlaces from "./DropdownPlaces.tsx";
import {useAppDispatch, useAppSelector} from "../../../../states/hooks.ts";
import {removeDropdownInput, setOpenForInput} from "../../../../states/features/dropdownSlice.ts";

export default function DropdownInputComponent({lenOfTransfers, eachInput}: {
    lenOfTransfers: number,
    eachInput: DropdownInput,
}) {


    const dispatch = useAppDispatch()
    const {openForInput} = useAppSelector(s => s.dropdown)

    return <div key={eachInput.id} className={dropdownStyles['transferInput']}>

            <div

                className={dropdownStyles['input-wrapper']}>
            <input value={eachInput.value}
                   style={openForInput === eachInput.id ? {borderBottomLeftRadius: '0', borderBottomRightRadius: '0', outline: '1px solid var(--color-main-deep-sea-navy)'} : {}}
                   onClick={() => dispatch(setOpenForInput(eachInput.id))}

                   placeholder={eachInput.start ? 'Where do you want to start from?' : 'Where do you want to go?'}/>

                {openForInput === eachInput.id && <DropdownPlaces />}
            </div>


        {lenOfTransfers > 2 && !eachInput.start &&
            <button onClick={() => dispatch(removeDropdownInput(eachInput))}
                    className={dropdownStyles['removeInput']}><img src={CloseSVG} width={24} alt={'Close icon'}/>
            </button>}


    </div>
}