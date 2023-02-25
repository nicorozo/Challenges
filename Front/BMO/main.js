// List of Header Panel Info
let hunger = 0;
let statusInfo = document.getElementById('status');

// List of img-expressions
const wakeUpImg = document.getElementById('wake-up');
const smileImg = document.getElementById('smile');

//List of Buttons
const actionBttn = document.getElementById('action-button');
const onOffBtnn = document.getElementById('on-off-button');
const statusChangeBttn = document.getElementById('status-change-button');



onOffBtnn.addEventListener('click', function statusOnOff() {

    smileImg.classList.toggle('display-none'); // wakeUp  Img-display

    if (statusInfo.innerHTML == 'Off') {

        statusInfo.innerHTML = 'On'
    }
    else {
        statusInfo.innerHTML = 'Off'
    }

});

actionBttn.addEventListener('click', function hungerButton() {

    if (statusInfo.innerHTML == 'On') { // this makes sure BMO is awake before eating
        if (hunger < 100) {
            actionBttn.addEventListener('mousedown', function () {
                wakeUpImg.classList.toggle('display-none');
                smileImg.classList.toggle('display-none');
            })
            document.getElementById("hunger").innerHTML = hunger += 5;
        }
        else {
            return;
        }
    }// Add more 'If' with different statusInfo
});

statusChangeBttn.addEventListener('click', function statusChange() {

});



