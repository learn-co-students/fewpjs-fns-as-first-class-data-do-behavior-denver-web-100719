/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  const newTime = parseInt(time)
  if(newTime < 12){
    return("Good Morning")
  }else if(newTime < 17){
    return("Good Afternoon")
  }else {
    return("Good Evening")
  }}

/* Write your implementation of displayMessage() */

  function displayMessage(timeDisplay){
  document.getElementById("greeting").innerText = timeDisplay
}