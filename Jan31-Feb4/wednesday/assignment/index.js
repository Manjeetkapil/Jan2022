const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    const formdata = new FormData(event.target);
    const value = Object.fromEntries(formdata.entries());
    let data = JSON.parse(sessionStorage.getItem("data"));
    if(data){
        data[value["email"]] = value;
    }
    else{
        data = {}
        data[value["email"]] = value;
    }
    let updated = JSON.stringify(data);
    sessionStorage.setItem("data",updated);
    alert("Completed")
}

function check(){
    let num = document.getElementById("number").value;
    console.log(num)
    if(num.length>10){
        document.getElementById("number").value = num.slice(0,10);
        alert("maximum allowed length is 10");
    }
}

window.onload = function(e){
    let data = JSON.parse(sessionStorage.getItem("data"));
    let divv = document.getElementById("data");
    let inner = `<div class="detailstitle"> Employees Details</div>`
    for(let i in data){
        for (j in data[i]){
            inner += `<div class="detailsbody"><span class="detailshead">${j}:</span>${data[i][j]}</div>`
        }
        inner+="<hr\>"
    }
    divv.innerHTML = inner;
}