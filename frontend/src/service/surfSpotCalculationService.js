
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