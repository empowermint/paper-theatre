const myTheatre = document.getElementById('myTheatre')
const paperLayers = Array.from(document.getElementsByClassName('paperLayer') as HTMLCollectionOf<HTMLElement>)

document.addEventListener("mousemove", moveLayers)

function moveLayers(event: MouseEvent) {
  paperLayers.forEach(layer => {
    const depth = parseInt(layer.getAttribute("data-depth"));
    const x = (window.innerWidth - event.clientX * depth) / 100;
    const y = (window.innerHeight - event.clientY * depth) / 100;

    layer.style.transform = `translateX(${x}%) translateY(${y}%)`;
  })
}
