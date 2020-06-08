// store random color first-button
const buttonOne = document.getElementById("first-button");
// store random color second-button
const buttonTwo = document.getElementById("second-button");
// store random color third-button
const buttonThree = document.getElementById("third-button");
// store random color fourt-button
const buttonFour = document.getElementById("fourth-button");

//get a random rgb color function
function rgbColor(num) {
  return Math.floor(Math.random() * num);
}

//creating a random color
function generateColor(e) {
  const randomColor =
    "rgb(" + rgbColor(256) + "," + rgbColor(256) + "," + rgbColor(256) + ")";
  event.target.style.backgroundColor = randomColor;
}

buttonOne.onclick = generateColor;
buttonTwo.onclick = generateColor;
buttonThree.onclick = generateColor;
buttonFour.onclick = generateColor;
