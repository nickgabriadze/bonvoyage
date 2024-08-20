import dropdownStyles from '../../styles/dropdown.module.css'
import {v4} from "uuid";
import {useAppDispatch, useAppSelector} from "../../../../../states/hooks.ts";
import {setSelectedLocations} from "../../../../../states/features/dropdownSlice.ts";
import places from "../../../../../assets/placesToVisit.ts";

export function DropdownPlaces({searchingFor}: { searchingFor: string }) {

    const dispatch = useAppDispatch()
    const {selectedLocations} = useAppSelector(s => s.dropdown)
    const locations = places.filter((place: string) => !selectedLocations.includes(place))

    const filteredLocations = locations.filter(loc => loc.toLowerCase().includes(searchingFor.toLowerCase()))
    console.log(selectedLocations)
    return <div className={dropdownStyles['placesDropdown']}
                style={filteredLocations.length < 10 ? {'height': 'fit-content', overflowY: 'hidden'} : {
                    'height': '300px',
                    overflowY: 'scroll'
                }}
    >
        {filteredLocations.map((place) => <button key={v4()}
                                                  onClick={() => dispatch(setSelectedLocations({location: place}))}
        >{place}</button>)}
    </div>

}

export default DropdownPlaces
