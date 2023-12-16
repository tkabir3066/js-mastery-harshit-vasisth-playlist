//setInterVal

/* console.log("Script start");

setInterval(() => {
  console.log(Math.random());
}, 1000);

console.log("Script end");
 */

const body = document.body;
const btnElement = document.getElementById("btn");
function getRandomColor() {
  const min = 0;
  const max = 255;

  const red = Math.floor(Math.random() * (max - min + 1) + min);
  const green = Math.floor(Math.random() * (max - min + 1) + min);
  const blue = Math.floor(Math.random() * (max - min + 1) + min);

  return `rgb(${red}, ${green}, ${blue})`;
}

const id = setInterval(() => {
  body.style.backgroundColor = getRandomColor();
}, 1000);

btnElement.addEventListener("click", () => {
  clearInterval(id);
  btnElement.textContent = body.style.backgroundColor;
});
