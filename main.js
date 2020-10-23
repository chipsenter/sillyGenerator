const customName = document.getElementById('customname');
const randomize = document.querySelector('#randomize');
const theme = document.getElementById('#theme');
const story = document.querySelector('.usa');
const story2 = document.querySelector('.gb');
const story3 = document.querySelector('.se');
const story4 = document.querySelector('.no');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
let insertX =
[
    "Willy the Goblin",
    "Big Daddy",
    "Father Christmas",
    "Santa Claus",
    "Trump"
]
let insertY =
[
    "the soup kitchen",
    "Disneyland",
    "the White House",
    "Liseberg",
    "The Ghetto"
]
let insertZ =
[
   "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away",
    "wrap a mask around your face and be miserable"
]

randomize.addEventListener('click', result);


let colors = ["red", "blue", "green", "yellow"],
    index = 0;                                     
    
document.getElementById("theme").onclick = function() {
  document.body.style.background = colors[index];  
  index = (index + 1) % colors.length;              
}


let input = document.getElementById("customname");
input.addEventListener("keyup", function(event) {
  if (event.key === 'Enter') {
   event.preventDefault();
   document.getElementById("randomize").click();
  }
});

function result() {

let newStory = storyText;   

let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

newStory = newStory.replace(':insertx:', xItem);
newStory = newStory.replace(':insertx:', xItem);
newStory = newStory.replace(':inserty:', yItem);
newStory = newStory.replace(':insertz:', zItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);

  }

    // Us Function
  if(document.getElementById("us").checked) {
    
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
  
      const weight = Math.round(getRandomInt(300)) + ' pounds';
      const temperature =  Math.round(getRandomInt(94-32)) + ' fahrenheit';
  
      newStory = newStory.replace('94 fahrenheit', temperature);
      newStory = newStory.replace('300 pounds', weight )

      story.textContent = newStory;
      story.style.visibility = 'visible';
  
  }

  // UK Function
  if(document.getElementById("uk").checked) {
    
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    const weight = Math.round(getRandomInt(300) * 0.0714286) + ' stone';
    const temperature =  Math.round(getRandomInt(94-32) * 5 / 9) + ' centigrade';

    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight )

    story2.textContent = newStory;
    story2.style.visibility = 'visible';

  }

  // Swedish Function 
  if(document.getElementById("se").checked) {

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    const weight = Math.round(getRandomInt(300) * 0.453592) + ' Kilos';
    const temperature =  Math.round(getRandomInt(94-32) * 5 / 9) + ' celsius';

    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight )

    story3.textContent = newStory;
    story3.style.visibility = 'visible';
  }

  // Norwegian Function 
  if(document.getElementById("no").checked) {

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
    const weight = Math.round(getRandomInt(300) * 0.453592) + ' Kilos';
    const temperature =  Math.round(getRandomInt(94-32) * 5 / 9) + ' celsius';

    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight )

    story4.textContent = newStory;
    story4.style.visibility = 'visible';
  }

}
