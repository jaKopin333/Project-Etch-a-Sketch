function Grids(size){
    const container = document.getElementById('gridContainer');
    const squareSize = 800 / size;
    container.innerHTML = ''; //clear existing grid
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
        square.className = 'square';
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'darkblue'; //Changes color on hover 
        });
        container.appendChild(square);
    }
}

document.getElementById('newGridButton').addEventListener('click', () =>
{
    let size = prompt("Enter the number of squares per side (max 100):");
    size = Number(size); // limit input to 100
    Grids(size);
});

Grids(16);

