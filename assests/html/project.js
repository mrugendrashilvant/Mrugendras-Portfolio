let down = document.getElementById('page0');
console.log(down);

function changeColor(){
    let colors = ["lightblue", "lightyellow", "#2ECC71", "orange", "#00c3ff"];

    let value = Math.floor(Math.random()*colors.length);

    down.style.color = colors[value];
    console.log("I'm changing")
}

// window.addEventListener('load',start);
// function start(){
//     setInterval(changeColor,200)
// }


/*Try to change color of Down in the dom*/