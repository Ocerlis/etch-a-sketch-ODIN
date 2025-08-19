let pixel = document.createElement("div");
let gridContainer = document.querySelector("#gridContainer"); 

for (i = 1; i <= 256; i++) {
    let pixel = document.createElement("div");
    pixel.className = "pixelBlock";
    gridContainer.appendChild(pixel);
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

mouseTrail();

