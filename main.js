function Grids(size) {
    // Grab the container that holds all the squares
    const container = document.getElementById('gridContainer');

    // Figure out how big each square should be
    const squareSize = 800 / size;

    // Remove the old grid before building a new one
    container.innerHTML = '';

    // Create total number of squares: size x size
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');

        // Give each square its width and height
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
        square.className = 'square';

        // Start each square with 0 darkening steps
        square.dataset.darkness = '0';

        square.addEventListener('mouseover', () => {
            // Only create a random color once per square
            if (!square.dataset.r) {
                square.dataset.r = String(Math.floor(Math.random() * 256));
                square.dataset.g = String(Math.floor(Math.random() * 256));
                square.dataset.b = String(Math.floor(Math.random() * 256));
            }

            // Read current darkness level
            let darkness = Number(square.dataset.darkness);

            // Increase darkness by 1 step, up to a max of 10
            if (darkness < 10) {
                darkness += 1;
                square.dataset.darkness = String(darkness);
            }

            // Get the square's original random RGB values
            const r = Number(square.dataset.r);
            const g = Number(square.dataset.g);
            const b = Number(square.dataset.b);

            // Turn darkness steps into a multiplier
            // 1st hover = 0.9, 10th hover = 0
            const multiplier = 1 - darkness / 10;

            // Darken the original color a little more each hover
            const newR = Math.round(r * multiplier);
            const newG = Math.round(g * multiplier);
            const newB = Math.round(b * multiplier);

            // Apply the darker version of the original random color
            square.style.backgroundColor = `rgb(${newR}, ${newG}, ${newB})`;
        });

        // Add the finished square to the container
        container.appendChild(square);
    }
}

document.getElementById('newGridButton').addEventListener('click', () => {
    let size = prompt('Enter the number of squares per side (max 100):');
    size = Number(size);

    // Stop if the user enters nothing, 0, or invalid input
    if (!size || size < 1) return;

    // Prevent sizes larger than 100
    size = Math.min(size, 100);

    // Build the new grid
    Grids(size);
});

// Create the default 16 x 16 grid when the page loads
Grids(16);
