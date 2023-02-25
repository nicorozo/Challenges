let output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;
while (i >= 0) {

    const para = document.createElement('p');

    if (i === 0) {

        para.textContent = "Blastoff!";
    } else {

        para.textContent = + `${i}`;
    }
    output.appendChild(para);

    i--;
}

