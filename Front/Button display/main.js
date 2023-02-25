let bttn = document.querySelector('#button');
let clsBttn = document.querySelector('#close-button');
let displayContainer = document.querySelector('#display-container');


bttn.addEventListener('click', function () {

    displayContainer.style.display = 'block';

})

clsBttn.addEventListener('click', function () {

    displayContainer.style.display = 'none';

})

// -------This part allows to 'click' anywhere to exit----

window.addEventListener('click', function (e) {
    if (e.target === displayContainer) {
        displayContainer.style.display = 'none';
    }
    console.log(e.target);
})