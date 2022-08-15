const grid = document.querySelector('.gridContainer')
const black = document.querySelector('.black');
const color = document.querySelector('#color');
const random = document.querySelector('.random');
const reset = document.querySelector('.reset');
const range = document.querySelector("#range")
const rangeReturn = document.querySelector('.rangeReturn');
const rangeValue = document.getElementById('range')
const rainbowbtn = document.querySelector('.rainbow');
const cool = document.querySelector('.cool');
const warm = document.querySelector('.warm');



function randomColor() {
    let randomColor = 0
    randomColor = Math.floor(Math.random() * 16777215).toString(16)
    return randomColor

}





range.addEventListener('input', function () {
    const rangeValue = document.getElementById('range').value;
    rangeReturn.textContent = rangeValue;
    return rangeValue
})


updateGrid = () => {
    const rangeValue = document.getElementById('range').value
    grid.innerHTML = '';
    grid.style.setProperty('grid-template-columns', `repeat(${rangeValue}, 2fr)`);
    grid.style.setProperty('grid-template-rows', `repeat(${rangeValue}, 2fr)`);
    for (let i = 0; i < rangeValue * rangeValue; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        grid.appendChild(div);


    }
}

reset.addEventListener('click', function () {
    let val = rangeValue.value
    let cell = grid.children;
    for (let i = 0; i < val * val; i++) {
        cell[i].style.backgroundColor = 'white'

    }
})

black.addEventListener('click', function () {
    let val = rangeValue.value
    let cell = grid.children;
    for (let i = 0; i < val * val; i++) {
        cell[i].addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = 'black';
        })
    }

})

random.addEventListener('click', function () {
    let val = rangeValue.value
    let cell = grid.children;
    for (let i = 0; i < val * val; i++) {
        cell[i].addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = ('#' + randomColor());
        })
    }

})


color.addEventListener('input', function () {
    let val = rangeValue.value
    let cell = grid.children;
    for (let i = 0; i < val * val; i++) {
        cell[i].addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = color.value

        })


    }

})

rainbowbtn.addEventListener('click', function () {
    let colorSelection = 0
    let val = rangeValue.value
    let cell = grid.children;
    for (let i = 0; i < val * val; i++) {

        cell[i].addEventListener('mouseover', function (e) {
            let colours = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];
            if(colorSelection > colours.length - 1){colorSelection = 0};
            e.target.style.backgroundColor = colours[colorSelection];
            colorSelection++;

        })
}
})


function rainbow(e) {

    const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    if (colorSelection > colours.length - 1) { colorSelection = 0 };
    e.target.style.backgroundColor = colours[colorSelection];
    colorSelection++;





}


createGrid = () => {

    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        grid.appendChild(div)

    }

}



rangeValue.addEventListener('change', updateGrid);

createGrid()





