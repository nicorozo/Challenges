const gridContainer = document.querySelector('#grid16x16');
const sizeBttn = document.querySelector('#size-button');

sizeBttn.addEventListener('click', function () {


    let inputColumns = parseFloat(document.querySelector('#input-columns').value);
    let inputRows = parseFloat(document.querySelector('#input-rows').value);
    let inputNumber = inputColumns * inputRows;


    gridContainer.style.setProperty('--grid-colums', inputColumns)
    gridContainer.style.setProperty('--grid-rows', inputRows)

    if (inputNumber > 0 && inputNumber <= 900) {

        if (gridContainer.lastChild) {

            console.log(gridContainer.lastChild)
        }

        for (i = 0; i < inputNumber; i++) {


            const div = document.createElement('div');

            div.classList.add('pixels');
            div.textContent = `${i + 1}`;
            // onmouseover change color
            div.addEventListener('mouseover', function () {
                div.style.backgroundColor = '#F06060';
            })
            // div1.style.backgroundColor = '#3a1322';

            gridContainer.appendChild(div);
        }
    }
})

function resetGrid(inputNumber) {
    for (i = 0; i < inputNumber; i++) {

        gridContainer.removeChild(div)
    }
}