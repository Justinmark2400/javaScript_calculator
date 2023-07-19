"use strict";

const inputField = document.querySelector(".input-field");
const buttons = document.querySelectorAll(".btn");
const btnResult = document.querySelector(".btn--result");
const btnClear = document.querySelector(".btn--clear");

buttons.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    const target = e.target;
    const value = target.dataset.num;
    if (!value) return;
    inputField.textContent += value;
  })
);

btnResult.addEventListener("click", function () {
  const inputValue = inputField.textContent;
  if (!inputValue) return;
  const result = eval(inputValue);
  inputField.textContent = result;
});

btnClear.addEventListener("click", function () {
  inputField.textContent = "";
});
