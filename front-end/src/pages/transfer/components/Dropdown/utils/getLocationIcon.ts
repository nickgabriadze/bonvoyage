
export default function getLocationIcon(index:number, inputIndicator:{[key:string]: string}, isLast:boolean){
    if (index === 0){
        return inputIndicator['start']
    }
    else if(isLast) {
        return inputIndicator['destination']
    }else {
        return inputIndicator['stop']
    }
}