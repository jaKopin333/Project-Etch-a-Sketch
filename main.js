function Grids(size){
    const container = document.getElementById('gridContainer');
    container.innerHTML = ''; //clear existing grid
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black'; //Changes color on hover 
        });
        container.appendChild(square);
    }
}

document.getElementById('newGridButton').addEventListener('click', () =>
{
    let size = prompt("Enter the number of squares per side (max 100):");
    size = Math.min(size, 100); // limit input to 100
    Grids(size);
});

Grids(16);