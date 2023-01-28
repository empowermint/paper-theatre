const myTheatre = document.getElementById('myTheatre');
const paperLayers = Array.from(document.getElementsByClassName('paperLayer'));
const debug1 = document.getElementById('debug1');
const debug2 = document.getElementById('debug2');
const client = myTheatre.getBoundingClientRect();
const centrePointX = client.width / 2;
const centrePointY = client.height / 2;
debug1.innerText = `w: ${client.width} h: ${client.width} cX: ${centrePointX} cY: ${centrePointY}`;
myTheatre.addEventListener("pointermove", (e) => {
    const x = (e.offsetX - centrePointX) / centrePointX;
    const y = (e.offsetY - centrePointY) / centrePointY;
    debug2.innerText = `X: ${x} Y: ${y}`;
    myTheatre.style.setProperty('--deltaX', `${x}`);
    myTheatre.style.setProperty('--deltaY', `${y}`);
});
