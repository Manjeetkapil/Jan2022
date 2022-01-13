const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
var weight;
var temperature;
var namee;
function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

const arrayx = [
    "Willy the Goblin"
    ,"Big Daddy"
    ,"Father Christmas"
]
const arrayy = [
    "the soup kitchen",
    "Disneyland",
    "the White House"
]
const arrayz = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"
]

randomize.addEventListener('click', result);

function result() {
    weight = "300 Pounds";
    temperature = "94 fahrenheit";
    namee = "Bob";

  if(customName.value !== '') {
    namee = customName.value;

  }

  if(document.getElementById("uk").checked) {
    weight = "21 stone";
    temperature =  "34 centigrade";
  }
  let randomx = randomValueFromArray(arrayx);
  let randomy = randomValueFromArray(arrayy);
  let randomz = randomValueFromArray(arrayz);
  story.textContent = `It was ${temperature} outside, so ${randomx} went for a walk. When they got to ${randomy}, they stared in horror for a few moments, then ${randomz}. ${namee} saw the whole thing, but was not surprised — ${randomx} weighs ${weight}, and it was a hot day.`;
  story.style.visibility = 'visible';
}