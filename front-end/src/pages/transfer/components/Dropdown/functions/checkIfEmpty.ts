import {DropdownInput} from "../../../../../types/transfers/dropdown.ts";

export function checkIfEmpty(inputs: DropdownInput[]){

    for (const dropdownInput of inputs){
        if (dropdownInput.value === undefined){
            return false;
        }
    }
    return true;

}
export default checkIfEmpty