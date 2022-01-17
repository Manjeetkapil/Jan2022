const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageList = ["images/pic1.jpg","images/pic2.jpg","images/pic3.jpg","images/pic4.jpg","images/pic5.jpg"];
/* Looping through images */

for(let image in imageList){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imageList[image]);
    newImage.addEventListener('click',displayImage);
    thumbBar.appendChild(newImage);
}
function displayImage(e){
    let clickedImage = e.currentTarget.getAttribute('src');
    displayedImage.setAttribute('src',clickedImage);
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener("click",setBackground)

function setBackground(){
    let current = btn.innerHTML;
    if(current=="Darken"){
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }
    else{
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}