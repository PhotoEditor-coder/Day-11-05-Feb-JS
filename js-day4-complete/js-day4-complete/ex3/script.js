const btnOne = document.getElementById("btn-one");
const btnTwo = document.getElementById("btn-two");
const btnThree = document.getElementById("btn-three");
const btnFour = document.getElementById("btn-four");
const btnFive = document.getElementById("btn-five");
const resetBtn = document.getElementById("reset-button");

// MouseOver

btnOne.addEventListener("mouseover", function () {
  btnOne.style.width = "100%";
});

// Mouseup

btnTwo.addEventListener("mouseup", function () {
  btnTwo.style.backgroundColor = "green";
});

// Mouseout

btnThree.addEventListener("mouseout", function () {
  btnThree.textContent = "The mouse is not here anymore";
});

// Mousedown

btnFour.addEventListener("mousedown", function () {
  btnFive.style.display = "block";
});

resetBtn.addEventListener("click", function () {
  btnOne.style.width = "";
  btnTwo.style.backgroundColor = "";
  btnThree.textContent = "The mouse must leave the box to change";
  btnFive.style.display = "none";
});
