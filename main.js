const bug = document.getElementById("bug");
const leftBTN = document.querySelector(".left");
const rightBTN = document.querySelector(".right");
const upBTN = document.querySelector(".up");
const downBTN = document.querySelector(".down");
const leftRotateBTN = document.querySelector(".rotateLeft");
const rightRotateBTN = document.querySelector(".rotateRight");

let leftPOS = 0;
let topPOS = 0;
let angle = 0;

// onclick of btn we will move

// left click to move left

function leftMove() {
  leftPOS -= 10;
  bug.style.left = `${leftPOS}px`;
}
leftBTN.addEventListener("click", leftMove);

// right move
function rightMove() {
  leftPOS += 10;
  bug.style.left = `${leftPOS}px`;
}
rightBTN.addEventListener("click", rightMove);
// moveUp
function moveUP() {
  topPOS -= 10;
  bug.style.top = `${topPOS}px`;
}
upBTN.addEventListener("click", moveUP);
// down move

function moveDOWN() {
  topPOS += 10;
  bug.style.top = `${topPOS}px`;
}
downBTN.addEventListener("click", moveDOWN);

// rotate left
function rotateLeft() {
  angle -= 90;
  bug.style.transform = `rotate(${angle}deg)`;
}
leftRotateBTN.addEventListener("click", rotateLeft);
// rotate right
function rotateRight() {
  angle += 90;
  bug.style.transform = `rotate(${angle}deg)`;
}
rightRotateBTN.addEventListener("click", rotateRight);
