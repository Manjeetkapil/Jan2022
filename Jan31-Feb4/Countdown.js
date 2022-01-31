var n = 1000;

var id = setInterval(() => {
    if(n==0){
        clearInterval(id);
    }
    console.log(n);
    n-=1;
}, 1000);