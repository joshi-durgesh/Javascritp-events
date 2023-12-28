const button = document.querySelector("button");
const clickHandler = function () {
  alert("another alert by using onclick event");
};

const anotherClickHandler = function () {
  console.log("the button click event is working properly");
};

button.onclick = clickHandler;

// button.addEventListener();

// button.removeEventListener();
