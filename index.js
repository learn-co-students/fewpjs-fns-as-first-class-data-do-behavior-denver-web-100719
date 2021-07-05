/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  const timeSplit = time.split(':')
  const timeHourMin = parseInt(timeSplit[0] + timeSplit[1])
  if (timeHourMin < 1200) {
    return "Good Morning"
  } else if (timeHourMin >= 1200 && timeHourMin <= 1700) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  } 
}

/* Write your implementation of displayMessage() */
function displayMessage(string){
  const greetingNode = document.querySelector('#greeting')
  greetingNode.innerText = string
}