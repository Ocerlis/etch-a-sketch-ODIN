let pixel = document.createElement("div");
let gridContainer = document.querySelector("#gridContainer"); 

function gridSetup(gridSize) {
    const grid = document.getElementById('gridContainer');
    let heightAndWidth = 18 * gridSize;

    grid.style.width = heightAndWidth + 'px';
    grid.style.height = heightAndWidth + 'px';

    for (i = 1; i <= gridSize * gridSize; i++) {
        let pixel = document.createElement("div");
        pixel.className = "pixelBlock";
        gridContainer.appendChild(pixel);
    }
}

function mouseTrail() {
    const pixels = document.querySelectorAll(".pixelBlock");

    pixels.forEach ((pixel) => {
        pixel.addEventListener('mouseover', function() {
            pixel.style.backgroundColor = "black";
            console.log("x");
        });

        pixel.addEventListener('mouseout', function() {
            pixel.style.backgroundColor = "gray";
            console.log("y");
        });
    })
}

gridSetup(3);
mouseTrail();
