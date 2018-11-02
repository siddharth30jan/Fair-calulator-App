let rate={
    fixed: 50,
    minKm: 5,
    perKm: 10,
    freeMin: 15,
    perMin: 2
}
function calcu(distance,time){
    let fair=rate.fixed
    fair+=(distance>rate.minKm)?((distance-rate.minKm)*rate.perKm):0
    fair+=(time>rate.freeMin)?((time-rate.freeMin)*rate.perMin):0
    return fair
}

exports=module.exports={
    rate,calcu
}