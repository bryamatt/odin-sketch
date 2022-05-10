function drawGrid(width) {
    for (let i = 0; i < width; i++) {
       
       let iDiv = document.createElement('div');
       iDiv.id = 'row' + i;
       iDiv.className = 'pixel-row';

       for (let j = 0; j < width; j++) {
           let jDiv = document.createElement('div');
           jDiv.id = 'col' + j;
           jDiv.className = 'pixel-col';
           iDiv.appendChild(jDiv);
       }

       document.getElementById('canvas').appendChild(iDiv);
    }
}

function changeColour(pixel) {
    this.classList.add('darken');
}

drawGrid(16);

const pixels = document.querySelectorAll('.pixel-col');

pixels.forEach(pixel => pixel.addEventListener('mouseenter', changeColour));

