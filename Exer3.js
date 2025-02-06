let btnStart = document.querySelector("#start")



function changeColor(){
    let red = Math.floor(Math.random() *255);
    let green = Math.floor(Math.random() *255);
    let blue = Math.floor(Math.random() *255);

    let background = `rgb(${red},${green},${blue})`;

    document.body.style.backgroundColor = background;
}

btnStart.addEventListener("click", changeColor)
