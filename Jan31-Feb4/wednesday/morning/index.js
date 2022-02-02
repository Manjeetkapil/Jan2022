function changeByID(){
    document.getElementById("unique").innerHTML = "I got changed using ID";
}

function changeByClass(){
    document.getElementsByClassName("first")[0].innerHTML = "I got changed using Class";
}

function alertDiv(){
    let x = document.getElementById("tags").value;
    let y = document.getElementsByTagName("div");
    if(x==1){
        alert(y[0].innerHTML);
    }
    if(x==2){
        alert(y[1].innerHTML);
    }
    if(x==3){
        alert(y[2].innerHTML);
    }
    
}