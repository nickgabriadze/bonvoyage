import {createSlice} from "@reduxjs/toolkit";
import {TDropdownInput} from "../../types/transfers/dropdown.ts";
import {v4} from "uuid";

interface DropdownState {
    openForInput: { id: string | undefined, alert?: boolean },
    selectedLocations: { transferInputId: string | undefined, locationValue: string }[],
    dropdownInputs: TDropdownInput[],
    scheduled: {
        year: string,
        month: string,
        day: string,
        time?: string
    } | undefined
}

const initialState: DropdownState = {
    openForInput: {id: undefined},
    selectedLocations: [],
    dropdownInputs: [{
        id: v4(),
        value: undefined,
        start: true
    },
        {
            id: v4(),
            value: undefined,
            end: true
        }
    ],
    scheduled: undefined

}

export const dropdownSlice = createSlice({
    name: "dropdown",
    initialState,
    reducers: {
        setOpenForInput: (state, action: { payload: { id: string | undefined, alert?: boolean } }) => {
            if (action.payload.alert) {
                return {
                    ...state,
                    openForInput: {id: action.payload.id, alert: action.payload.alert},
                }
            } else {
                return {
                    ...state,
                    openForInput: {id: action.payload.id}
                }
            }
        },
        setSelectedLocations: (state, action: { payload: { location: string } }) => {

            return {
                ...state,
                dropdownInputs: [...state.dropdownInputs.map(i => {
                    return {
                        ...i,
                        value: state.openForInput.id === i.id ? action.payload.location : i.value
                    }
                })],
                selectedLocations: [...state.selectedLocations, {
                    transferInputId: state.openForInput?.id,
                    locationValue: action.payload.location,
                }],
                openForInput: {id: undefined},

            }
        },

        removeSelectedLocation: (state, action: { payload: { id: string, location: string } }) => {
            return {
                ...state,
                dropdownInputs: [...state.dropdownInputs.map(i => {
                    return {
                        ...i,
                        value: action.payload.id === i.id ? undefined : i.value
                    }
                })],
                selectedLocations: [...state.selectedLocations.filter(location => location.locationValue !== action.payload.location)]

            }
        },

        addDropdownInput: (state, action: { payload: TDropdownInput }) => {
            return {
                ...state,
                dropdownInputs: [...state.dropdownInputs, action.payload]
            }
        },

        removeDropdownInput: (state, action: { payload: TDropdownInput }) => {
            return {
                ...state,
                selectedLocations: [...state.selectedLocations.filter(location => location.locationValue !== action.payload.value)],
                dropdownInputs: [...state.dropdownInputs.filter((i) => i.id !== action.payload.id)]
            }
        },

        setScheduled: (state, action: { payload: {year:string, month: string, day: string} | undefined }) => {
            return{
                ...state,
                scheduled: action.payload ? {
                    ...state.scheduled,
                    year: action.payload.year,
                    month: action.payload.month,
                    day: action.payload.day,
                } : undefined,

            }
        }
    }
})


export const {
    setOpenForInput
    , removeSelectedLocation, setSelectedLocations, addDropdownInput
    , removeDropdownInput, setScheduled
} = dropdownSlice.actions;
export default dropdownSlice.reducer