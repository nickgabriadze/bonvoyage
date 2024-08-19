import dropdownStyles from '../../styles/dropdown.module.css'
import {v4} from "uuid";
import {useAppDispatch} from "../../../../../states/hooks.ts";
import {setSelectedLocations} from "../../../../../states/features/dropdownSlice.ts";
import React from "react";

export function DropdownPlaces({locations}: {locations: string[]}) {

    const dispatch = useAppDispatch()

    return <div className={dropdownStyles['placesDropdown']}>
        {locations.map((place) => <div key={v4()}
        onClick={() => dispatch(setSelectedLocations({location: place}))}
        >{place}</div>)}

    </div>

}

export default React.forwardRef(DropdownPlaces)
