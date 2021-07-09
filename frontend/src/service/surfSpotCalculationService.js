
export const rightTimeToShowCurrentTemp = (surfSpot) => {

    const now = Date.now()

    for(let i=0; i < surfSpot.surfData.length; i ++){

        if (now < Date.parse(surfSpot?.surfData[i+1].time)) {

            const a = Math.abs(now - Date.parse(surfSpot?.surfData[i].time))
            const b = Math.abs(now - Date.parse(surfSpot?.surfData[i +1].time))

            if (a < b) {
                return surfSpot?.surfData[i]
            } else {
                return surfSpot?.surfData[i+1]
            }
        }
    }

}

export const getDirection = (direction) =>{
    if(Number(direction) <= 22.5 || Number(direction) >= 337.5)  {
        return "N"
    }else if(Number(direction) > 22.5 && Number(direction) <= 67.5){
        return "NE"
    }else if(Number(direction) > 67.5 && Number(direction) <= 112.5){
        return "E"
    }else if(Number(direction) > 112.5 && Number(direction) <= 157.5){
        return "SE"
    }else if(Number(direction) > 157.5 && Number(direction) <= 202.5){
        return "S"
    }else if(Number(direction) > 202.5 && Number(direction) <= 247.5){
        return "SW"
    }else if(Number(direction) > 247.5 && Number(direction) <= 292.5){
        return "W"
    }else if(Number(direction) > 292.5 && Number(direction) <= 337.5){
        return "NW"
    }
}

