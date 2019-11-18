/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  const timeSplit = time.split(':')
  timeSplit[0] = parseInt(timeSplit[0])
  if(timeSplit[0] < 12){
    return "Good Morning"
  } else if (timeSplit[0] >= 12 && timeSplit[0] <= 17){
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