// const button = document.querySelector("button");
const button = document.querySelectorAll("button");

const clickHandler = (event) => {
  event.target.disabled = true;
  console.log(event);
};

const anotherClickHandler = () => {
  console.log("the button click event is working properly");
};

// button.onclick = clickHandler;
// button.onclick = anotherClickHandler;

// const boundFn = clickHandler.bind(this);

// button.addEventListener("click", clickHandler);

// setTimeout(() => {
//   button.removeEventListener("click", clickHandler);
// }, 2000);
button.forEach((element) => {
  element.addEventListener("click", clickHandler);
});
