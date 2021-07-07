/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString) {
  let splitString = timeString.split(":")
  let joinString = splitString.join("")
  let inputString = parseInt(joinString, 10)

  let greeting = ""
  if (inputString < 1200) {
    greeting = "Good Morning";
  } else if (inputString >= 1200 && inputString <= 1700) {
    greeting = "Good Afternoon";
  } else if (inputString > 1700) {
    greeting = "Good Evening";
  }
  return greeting;
}

function displayMessage(string) {
  let greeting = string;
  document.getElementById("greeting").innerText = greeting;
}