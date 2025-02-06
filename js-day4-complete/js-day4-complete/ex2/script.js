const viewBtn = document.getElementById("view-button");
const info = document.getElementById("info");
const closeBtn = document.getElementById("close-button");

function showInfo() {
  info.style.display = "block";
  closeBtn.style.display = "block";
}

function changeText() {
  viewBtn.textContent = "Hello there";
}

function hide() {
  info.style.display = "none";
  closeBtn.style.display = "none";
}

function resetText() {
  viewBtn.textContent = "View";
}
// DOM Event Handlers (Not good approach)
// viewBtn.onclick = showInfo;
// viewBtn.onclick = changeText;

// Event listeners
viewBtn.addEventListener("click", showInfo);
viewBtn.addEventListener("click", changeText);
closeBtn.addEventListener("click", hide);
closeBtn.addEventListener("click", resetText);
