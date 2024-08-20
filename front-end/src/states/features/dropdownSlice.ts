import {createSlice} from "@reduxjs/toolkit";
import {DropdownInput} from "../../types/transfers/dropdown.ts";
import {v4} from "uuid";

interface DropdownState {
    openForInput: string | undefined,
    selectedLocations: { transferInputId: string | undefined, locationValue: string }[],
    dropdownInputs: DropdownInput[]
}

const initialState: DropdownState = {
    openForInput: undefined,
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
    ]

}

export const dropdownSlice = createSlice({
    name: "dropdown",
    initialState,
    reducers: {
        setOpenForInput: (state, action) => {
            return {
                ...state,
                openForInput: action.payload,
            }
        },
        setSelectedLocations: (state, action: { payload: { location: string } }) => {

            return {
                ...state,
                dropdownInputs: [...state.dropdownInputs.map(i => {
                    return {
                        ...i,
                        value: state.openForInput === i.id ? action.payload.location : i.value
                    }
                })],
                selectedLocations: [...state.selectedLocations, {
                    transferInputId: state.openForInput,
                    locationValue: action.payload.location,
                }],
                openForInput: undefined,

            }
        },

        removeSelectedLocation:(state, action:{payload: {id: string, location: string}}) => {
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

        addDropdownInput: (state, action:{payload: DropdownInput}) => {
            return {
                ...state,
                dropdownInputs: [...state.dropdownInputs, action.payload]
            }
        },

        removeDropdownInput: (state, action:{payload: DropdownInput}) => {
            return {
                ...state,
                selectedLocations: [...state.selectedLocations.filter(location => location.locationValue !== action.payload.value)],
                dropdownInputs: [...state.dropdownInputs.filter((i) => i.id !== action.payload.id)]
            }
        },


    }
})


export const {setOpenForInput,removeSelectedLocation, setSelectedLocations, addDropdownInput, removeDropdownInput} = dropdownSlice.actions;
export default dropdownSlice.reducer