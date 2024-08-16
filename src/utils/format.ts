export const formatNumberAbbreviation = (number: number): string => {
    if (number < 1000) {
        return number.toFixed(2)
    } else if (number < 1e+6) {
        return (number / 1000).toFixed(1) + 'K'
    } else if (number < 1e+9) {
        return (number / 1e+6).toFixed(1) + 'M'
    } else if (number < 1e+12){
        return (number / 1e+9).toFixed(1) + 'B'
    }else if(number < 1e+15){
        return (number / 1e+12).toFixed(1) + 'T'
    }else{
        return (number / 1e+15).toFixed(1) + 'Q'
    }
}
