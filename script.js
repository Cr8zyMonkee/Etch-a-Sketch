const btn = document.getElementById('resetGrid');
function generateGrid(cellInput) {
    let cellsPerGrid = Math.pow(cellInput, 2);
    const container = document.querySelector('#container');
    container.setAttribute('style', 'grid-template-columns: repeat('+ cellInput + ', 1fr)');
    for (i = 0; i < cellsPerGrid; i++) {
        
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = 'black';
        } );

        container.appendChild(cell);
    }
}
generateGrid(16);

btn.addEventListener('click', e => {
    /*let elements = document.getElementsByClassName('cell');
    for (let i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor ='';
    }*/
    let gridNum = prompt('Please enter new grid size. (Less than 100)');

    const removeContainer = document.querySelector('.cell');
    while (removeContainer.hasChildNodes()) {
        removeContainer.removeChild(removeContainer.firstChild);
    }

    generateGrid(gridNum);
})

