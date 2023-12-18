//Callback hell to flat code

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeText(element, text, color, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (element) {
        element.textContent = text;
        element.style.color = color;
        resolve();
      } else {
        reject();
      }
    }, time);
  });
}

const returnedPromise = changeText(heading1, "One is One", "red", 2000);

returnedPromise
  .then(() => {
    return changeText(heading2, "Two is two", "purple", 1000);
  })
  .then(() => {
    return changeText(heading3, "Three is three", "crimson", 1000);
  })
  .then(() => {
    return changeText(heading4, "Four 4", "green", 1000);
  })
  .then(() => {
    return changeText(heading5, "Five 5", "blue", 1000);
  })
  .then(() => {
    return changeText(heading6, "sixer 6", "pink", 1000);
  })
  .then(() => {
    return changeText(heading7, "CrSeven", "maroon", 1000);
  });
