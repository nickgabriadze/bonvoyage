import {TDropdownInput} from "../../../../../types/transfers/dropdown.ts";

export function checkIfEmpty(inputs: TDropdownInput[]){

    for (const dropdownInput of inputs){
        if (dropdownInput.value === undefined){
            return true;
        }
    }
    return false;

}
export default checkIfEmpty