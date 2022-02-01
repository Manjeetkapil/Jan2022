var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
function getMonth(datee){
    var d = new Date(datee)
    return monthNames[d.getMonth()];
}

console.log(getMonth("2022-01-01"))