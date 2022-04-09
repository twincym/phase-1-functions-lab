function distanceFromHqInBlocks(number){
    return Math.abs(42-number)
}

function distanceFromHqInFeet(number){
    return distanceFromHqInBlocks(number)*264
}

function distanceTravelledInFeet(number1, number2){
    return (Math.abs(number2-number1)*264)
}

function calculatesFarePrice(start, destination){
    let finalDestinaion = (Math.abs(start-destination)*264)
    if (finalDestinaion <401){
        return 0
    }
    else if (finalDestinaion < 2000){
        return ((finalDestinaion-400) * 0.02)
    }
    else if (finalDestinaion < 2500){
        return 25
    }
    else if (finalDestinaion > 2500){
        return "cannot travel that far"
    }}