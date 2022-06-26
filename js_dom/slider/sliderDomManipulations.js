const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");


//Solution 1

// let currentRight = 0;

// rightBtn.addEventListener('click', e => {
//   e.preventDefault();
//   if (currentRight < 500)
//     currentRight += 100;
//   items.style.right = `${currentRight}px`;
// });


// leftBtn.addEventListener('click', e => {
//   e.preventDefault();
//   if (currentRight > 0)
//     currentRight -=100;
//   items.style.right = `${currentRight}px`;
// });


// Solution 2

// const computedStyles = getComputedStyle(items);

// rightBtn.addEventListener('click', e => {
//   e.preventDefault();
//   let currentRight = parseInt(computedStyles.right);
//   if (currentRight < 500)
//   items.style.right = `${currentRight+100}px`;

// });


// leftBtn.addEventListener('click', e => {
//   let currentRight = parseInt(computedStyles.right);
//   e.preventDefault();
//   if (currentRight > 0)
//   items.style.right = `${currentRight-100}px`;
// });


//Solution 3

const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemsList = document.querySelector("#items");
const computedStyles = window.getComputedStyle(itemsList);
const item = document.querySelectorAll(".item");

const itemWidth = getComputedStyle(item[0]).width;
const step = parseInt(itemWidth);
const preShownItems = 300 / step;
const minRight = 0;
const maxRight = step*(item.length-preShownItems);
let currentRight = 0;


itemsList.style.right = currentRight;

right.addEventListener("click", e => {
  e.preventDefault();
  if (currentRight < maxRight) {
    currentRight += step;
    itemsList.style.right = `${currentRight}px`;
  }

})

left.addEventListener("click", e => {
  e.preventDefault();
  if (currentRight > 0) {
    currentRight -= step;
    itemsList.style.right = `${currentRight}px`;
  }
})
