// const button = document.querySelector("button");
const button = document.querySelector("button");

const clickHandler = (event) => {
  //   event.target.disabled = true;
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

// button.forEach((element) => {
//   element.addEventListener("click", clickHandler);
// });

// button.forEach((element) => {
//   element.addEventListener("mouseenter", clickHandler);
// });

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector("div");
div.addEventListener("click", (event) => {
  console.log("CLICKED DIV");
  console.log(event);
});

button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("CLICKED BUTTON");
  console.log(event);
});
