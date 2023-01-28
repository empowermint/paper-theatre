const myTheatre = document.getElementById('myTheatre');
const paperLayers = Array.from(document.getElementsByClassName('paperLayer'));
const debug1 = document.getElementById('debug1');
const debug2 = document.getElementById('debug2');
const client = myTheatre.getBoundingClientRect();
const centrePointX = client.width / 2;
const centrePointY = client.height / 2;
myTheatre.addEventListener("pointermove", (e) => {
    const x = (e.offsetX - centrePointX) / centrePointX;
    const y = (e.offsetY - centrePointY) / centrePointY;
    debug2.innerText = `X: ${Math.round(x * 100)}% Y: ${Math.round(y * 100)}%`;
    myTheatre.style.setProperty('--deltaX', `${x}`);
    myTheatre.style.setProperty('--deltaY', `${y}`);
});
