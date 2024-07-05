

const icon = document.getElementById('goof-icon');
const countElement = document.getElementById('goof-count');

icon.addEventListener('click', () => {
  const currentCount = parseInt(countElement.textContent);
  countElement.textContent = currentCount + 1;
});


const icoon = document.getElementById('go-icon');
const countElements = document.getElementById('go-count');

icoon.addEventListener('click', () => {
  const currentCounts = parseInt(countElements.textContent);
  countElements.textContent = currentCounts + 1;
});



const icn = document.getElementById('goo-icon');
const coountElement = document.getElementById('goo-count');

icn.addEventListener('click', () => {
  const currentCoount = parseInt(coountElement.textContent);
  coountElement.textContent = currentCoount + 1;
});

// let not = document.getElementById("#noti");
// not.addEventListener('click', () => {
//   not.Style.Color = "yellow;"
//   alert("dfgd");
//   not.Style.Cursor = "pointer";
// });

let not = document.getElementById("noti");
let vr = true;
not.addEventListener('click', () => {
  if (vr == true) {
    not.style.color = "yellow";
    not.style.backgroundColorcolor = "yellow";
    not.style.cursor = "arrow";
    not.style.transition = "all 0.2s ease-in-out";
    vr = false;
  } 
  else {
    not.style.color = "white";
    not.style.cursor = "pointer";
    not.style.transition = "all 0.2s ease-in-out";
    vr = true;
  }
  
});


const ico = document.getElementById('g-icon');
const gcount = document.getElementById('g-count');
ico.addEventListener("click", () => {
  const current = parseInt(gcount.textContent);
  gcount.textContent = current + 1;
})

const ic = document.getElementById('gg-icon');
const gcunt = document.getElementById('gg-count');
ic.addEventListener("click", () => {
  const current = parseInt(gcunt.textContent);
  gcunt.textContent = current + 1;
})

const io = document.getElementById('gi-icon');
const gount = document.getElementById('gi-count');
io.addEventListener("click", () => {
  const current = parseInt(gount.textContent);
  gount.textContent = current + 1;
})

let changer = document.getElementById('book');
let main = document.querySelector(".main-content");
let right = document.querySelector(".right-sidebar"); // corrected typo
let co = document.querySelector(".post-container");
let sin = true;

changer.addEventListener('click', () => {
  if (sin === true) {
    document.body.style.backgroundColor = "black";
    main.style.backgroundColor = "#595C68";
    main.style.color = "white";
    co.style.backgroundColor = "#D3D3D3"; // corrected error
    right.style.backgroundColor = "lightgrey";
    sin = false;
  } else if (sin === false) {
    document.body.style.backgroundColor = "#EFEFEF";
    main.style.backgroundColor = "#EFEFEF";
    main.style.color = "black";
    co.style.backgroundColor = "white";
    right.style.backgroundColor = "#FFFFFF";
    sin = true;
  }
});

