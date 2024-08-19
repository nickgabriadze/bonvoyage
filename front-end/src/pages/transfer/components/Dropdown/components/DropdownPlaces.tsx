import places from "../../../../../assets/placesToVisit.ts";
import dropdownStyles from '../../styles/dropdown.module.css'
import {v4} from "uuid";
import {useAppDispatch, useAppSelector} from "../../../../../states/hooks.ts";
import {setSelectedLocations} from "../../../../../states/features/dropdownSlice.ts";
import {useEffect, useState} from "react";

export default function DropdownPlaces() {
    const {selectedLocations} = useAppSelector(s => s.dropdown)
    const dispatch = useAppDispatch()
    const [locations, setLocations] = useState(places.filter((place: string) => !(place in selectedLocations)))

    useEffect(() => {
        setLocations(locations.filter((place: string) => !selectedLocations.includes(place)))

    }, [selectedLocations.length])

    return <div className={dropdownStyles['placesDropdown']}>
        {locations.map((place) => <div key={v4()}
        onClick={() => dispatch(setSelectedLocations({location: place}))}
        >{place}</div>)}

    </div>


}
