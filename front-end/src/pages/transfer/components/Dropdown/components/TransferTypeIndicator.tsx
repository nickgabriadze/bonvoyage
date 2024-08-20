import dropdownStyles from "../../styles/dropdown.module.css";
import getLocationIcon from "../utils/getLocationIcon.ts";
import StartingLocationSVG from "../../../../../assets/icons/current-location.svg";
import MultipleStopSVG from "../../../../../assets/icons/multiple-stop.svg";
import DestinationSVG from "../../../../../assets/icons/destination.svg";

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