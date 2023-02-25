const buttonFB = document.getElementById('button');

buttonFB.addEventListener('click', function () {
    let number = document.getElementById("inputId").value;
    fizzBuzz(number)

    function fizzBuzz(number) {

        for (i = 1; i <= number; i++) {

            if (number % 3 === 0 && number % 5 === 0) {
                containerDiv.classList.remove('class-fizz', 'class-buzz')
                containerDiv.classList.add('fizzbuzz')


            } else if (number % 3 === 0) {
                let containerDiv = document.getElementById('container-div');
                containerDiv.classList.remove('fizzbuzz', 'class-buzz')
                containerDiv.classList.add('class-fizz')


            } else if (number % 5 === 0) {
                console.log("Buzz")
                let containerDiv = document.getElementById('container-div');
                containerDiv.classList.remove('fizzbuzz', 'class-fizz')
                containerDiv.classList.add('class-buzz')

            } else console.log(i)
        }
    }
})




// -------------------- button ---------------
