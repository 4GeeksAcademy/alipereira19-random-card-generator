/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let palo = ["♦", "♥", "♠", "♣"];

let upperPalo = document.getElementById("upper");
let lowerPalo = document.getElementById("lower");
let centerNum = document.getElementById("number");

function generateCard() {
  let indexNum = Math.floor(Math.random() * num.length);
  let randomValue = num[indexNum];

  let indexPalo = Math.floor(Math.random() * palo.length);
  let randomSuit = palo[indexPalo];

  centerNum.textContent = randomValue;
  upperPalo.textContent = randomSuit;
  lowerPalo.textContent = randomSuit;

  if (randomSuit === "♥" || randomSuit === "♦") {
    upperPalo.style.color = "red";
    lowerPalo.style.color = "red";
  } else {
    upperPalo.style.color = "black";
    lowerPalo.style.color = "black";
  }
}

document.getElementById("button").addEventListener("click", generateCard);

window.onload = generateCard;
