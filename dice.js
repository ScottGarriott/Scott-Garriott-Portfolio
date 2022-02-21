const cube = document.querySelector('.cube')
let currentClass = ''

// function to generate random number

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    console.log("random generator", min, max, (max-min+min))
    return Math.floor(Math.random() * (max-min) + min)
    //maximum is exclusive and minimum is inclusive
}

//main roll dice function on click

function rollDice() {
    const randNum = getRandomInt(1,7)
    const showClass = 'show-' + randNum
    console.log('cube classList', cube.classList)
    //if there is already a class remove it
    if( currentClass ) {
        cube.classList.remove( currentClass )
    }
    //add the new showclass with the generated number
    cube.classList.add( showClass )
    //set the current class to the randomly generated number
    currentClass = showClass
}

rollDice()

cube.addEventListener('click', rollDice)