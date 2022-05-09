function manipDate(date1, date2){
    if (isNaN(date1 - date2)){
    return "impossible"
    }else{
    return { daysBetween: Math.abs((date1 - date2) / (24 * 3600 * 1000)), isFirstLeap: (date1.getFullYear() % 4 == 0) ? true : false, isSecondLeap: (date2.getFullYear() % 4 == 0) ? true : false }
    }
}
console.log(manipDate(new Date("2026-09-25"), new Date("2008-01-22")))

module.exports = manipDate