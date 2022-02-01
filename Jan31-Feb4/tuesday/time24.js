function formatTime(d){
    return d.getHours() + ":" + d.getMinutes() +":" + d.getSeconds();
}

console.log(formatTime(new Date()))