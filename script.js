function drawGrid(width) 
{
    const canvas = document.getElementById('canvas');

    canvas.innerHTML = "";

    for (let i = 0; i < width; i++) {
       
       let iDiv = document.createElement('div');
       iDiv.id = 'row' + i;
       iDiv.className = 'pixel-row';

       for (let j = 0; j < width; j++) {
           let jDiv = document.createElement('div');
           jDiv.id = 'col' + j;
           jDiv.className = 'pixel-col';
           jDiv.style.backgroundColor= 'rgb(255,255,255)';
           iDiv.appendChild(jDiv);
       }

       canvas.appendChild(iDiv);
    }
    const pixels = document.querySelectorAll('.pixel-col');

    pixels.forEach(pixel => pixel.addEventListener('mouseenter', changeColour));
}

function changeColour(pixel) {
    //this.classList.add('darken');
    const currColour = Number(this.style.backgroundColor.slice(4,7).split(',').join(''));
    const newColour = currColour - 26;
    this.style.backgroundColor = `rgb(${newColour},${newColour},${newColour})`;
}

function changeGridSize() {
    let gridSize = Number(prompt("Enter new grid size between 1 and 100"))
    if (gridSize > 0 && gridSize <= 100) {
        drawGrid(gridSize);
    }
    else {
        alert("Not a valid input");
    }
}

drawGrid(16);


const button = document.getElementById('numSquares');

button.addEventListener('click', changeGridSize);
