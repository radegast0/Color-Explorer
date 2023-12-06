let allColors = [];
let savedColors = [];
let stopFunction = false;
const rgbPopup = document.getElementById('rgbPopup');

rgbPopup.classList.add('hidden')

window.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    rgbPopup.style.left = x + 'px';
    rgbPopup.style.top = y + 'px';
});

function toggleFunction(){
    if(!stopFunction){
        rgbPopup.classList.remove('hidden')
        document.body.style.cursor = 'crosshair'
        document.querySelector('.js-start-button').textContent = 'Stop'
        mainFunction();
    } else {
        document.querySelector('.js-start-button').textContent = 'Start'
        rgbPopup.classList.add('hidden')
        stopFunction = false;
        document.body.style.cursor = 'default'
    }
}

function mainFunction() {
    window.removeEventListener("mouseover", mouseoverHandler);
    window.removeEventListener("click", mouseclickHandler);

    window.addEventListener("mouseover", mouseoverHandler);
    window.addEventListener("click", mouseclickHandler);

    stopFunction = true;
}

function mouseoverHandler (event) {
    if (stopFunction) {
        const bgColor = window.getComputedStyle(event.target).backgroundColor;
        allColors.push(bgColor);
        document.querySelector('.rgb-popup').innerHTML = `${bgColor}` 
    }
}
function mouseclickHandler (event) {
    if (stopFunction) {
        const bgClickedColor = window.getComputedStyle(event.target).backgroundColor;
        savedColors.push(bgClickedColor);
        console.log(savedColors);
    }
}

