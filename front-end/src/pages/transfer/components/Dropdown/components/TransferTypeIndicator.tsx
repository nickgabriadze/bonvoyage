import dropdownStyles from "../../styles/dropdown.module.css";
import getLocationIcon from "../utils/getLocationIcon.ts";
import StartingLocationSVG from "/icons/dropdown/current-location.svg";
import MultipleStopSVG from "/icons/dropdown/multiple-stop.svg";
import DestinationSVG from "/icons/dropdown/destination.svg";

export default function TransferTypeIndicator({index, isLast}: { index: number; isLast: boolean }) {
    const inputIndicator = {
        'start': StartingLocationSVG,
        'stop': MultipleStopSVG,
        'destination': DestinationSVG
    }

    return <div className={dropdownStyles['input-type-indicator']}>
        <img src={getLocationIcon(index, inputIndicator, isLast)}
             alt={'Location icon'}
             width={24}
        />

    </div>
}