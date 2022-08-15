const grid = document.querySelector('.gridContainer')
const black = document.querySelector('.black');
const color = document.querySelector('#color');
const random = document.querySelector('.random');
const reset = document.querySelector('.reset');
const range = document.querySelector("#range")
const rangeReturn = document.querySelector('.rangeReturn');
const rangeValue = document.getElementById('range')



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


createGrid = () => {

    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('grid');
        grid.appendChild(div)

    }

}



rangeValue.addEventListener('change', updateGrid);

createGrid()





