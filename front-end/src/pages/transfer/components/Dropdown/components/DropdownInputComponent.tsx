import dropdownStyles from "../../styles/dropdown.module.css";
import CloseSVG from "../../../../../assets/icons/close.svg";
import ClearInputSVG from "../../../../../assets/icons/remove.svg";
import StartingLocationSVG from './../../../../../assets/icons/current-location.svg'
import DestionationSVG from './../../../../../assets/icons/destination.svg'
import MultipleStopSVG from './../../../../../assets/icons/multiple-stop.svg'
import {DropdownInput} from "../../../../../types/transfers/dropdown.ts";
import DropdownPlaces from "./DropdownPlaces.tsx";
import {useAppDispatch, useAppSelector} from "../../../../../states/hooks.ts";
import {
    removeDropdownInput,
    removeSelectedLocation,
    setOpenForInput
} from "../../../../../states/features/dropdownSlice.ts";
import places from "../../../../../assets/placesToVisit.ts";
import {useEffect, useRef, useState} from "react";
import getLocationIcon from "../utils/getLocationIcon.ts";

export default function DropdownInputComponent({index, totalLength, currentInput}: {
    index: number,
    totalLength: number,
    currentInput: DropdownInput,
}) {


    const dispatch = useAppDispatch()

    const {selectedLocations, openForInput} = useAppSelector(s => s.dropdown)
    const locations = places.filter((place: string) => !selectedLocations.includes(place))
    const [searchingFor, setSearchingFor] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null)
    const isLast = totalLength - 1 === index

    const inputIndicator = {
        'start': StartingLocationSVG,
        'stop': MultipleStopSVG,
        'destination': DestionationSVG
    }
    useEffect(() => {
        if (openForInput === currentInput.id && inputRef.current) {
            inputRef.current.focus();
        }
    }, [openForInput]);


    return <div key={currentInput.id} className={dropdownStyles['transferInput']} ref={dropdownRef}>
        <div className={dropdownStyles['input-type-indicator']}>
            <img src={getLocationIcon(index, inputIndicator, isLast)}
                 alt={'Location icon'}
                 width={24}
            />

        </div>
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
            {openForInput === currentInput.id && <DropdownPlaces
                locations={locations.filter(loc => loc.toLowerCase().includes(searchingFor.toLowerCase()))}/>}
        </div>

        {currentInput.value && openForInput === currentInput.id && <button
            onClick={() => dispatch(removeSelectedLocation({
                id: currentInput.id,
                location: String(currentInput.value)
            }))}
            className={dropdownStyles['removeInput']}><img src={ClearInputSVG} width={24} alt={"Clear input"}/>
        </button>}

        {isLast && totalLength > 2 &&
            <button onClick={() => dispatch(removeDropdownInput(currentInput))}
                    className={dropdownStyles['removeInput']}><img src={CloseSVG} width={24} alt={'Close icon'}/>
            </button>}


    </div>

}