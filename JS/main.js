const log = console.log;

var title = document.querySelector('h1')
console.log(title)



const game = document.querySelector('.game')
const mines = game.querySelectorAll('button')


function reaction(n) {
    console.log(' Button clicked! ', n)
}

const l1 = document.querySelector('#l-1')
console.log(l1)
l1.addEventListener('click', function () {
    console.log(' Button -2 clicked! ')
})


// -------------------------------------------------

function rtf(x) {
    console.log('The arguments', arguments);

    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }

    console.log('Hello', x);
    return (x + x)
}
let f = rtf(5, 3, 5, 7);
console.log(f);



let result = summ(3, 5)
console.log(result)

// declarative (has 'hoisting')
function summ(a, b) {
    console.log(this)
    return a + b
}

// functional  expresion (does have hoisting)
let dfdfd = function () {

}

// arrow function (does not have 'this' )
let tytyt = () => {
    console.log(this)
}
tytyt()

console.log(this)

let summ2 = (a, b) => {
    return (a + b);
}
console.log(summ2(5, 7))

let mult = a => a * a;

console.log(mult(5))


// calback
// Promice
// asynk/await

let map = [
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 0, 0, 0, 0
]
function mix() {
    for (let i = 0; i < map.length; i++) {
        let state = Math.random()
        state = Math.round(state)
        map[i] = state
    }
}

// Коли гра завершилась - автоматично виконати функцію (возврат) і функцію (мікс)
//
// Почитати про CSS - http://htmlbook.ru/css
//
// І різні стилі (вивчені на сайті) - застосувати до елементів гри

function reaction(n) {
    console.log(n);
    if (map[n - 1] == 1) end()
    else {
        mines[n - 1].innerHTML = '.'

    }
}

function end() {
    log(' -- end')
    for (let i = 0; i < map.length; i++) {
        log('--for')
        if (map[i] == 1) {
            log('--if')
            mines[i].innerHTML = '*'
        }
        setTimeout(function () {
            restart()
            mix()
        }, 3000)
    }
    show_popup('БАБАХ!!!!');
}
function restart() {
    for (let i = 0; i < mines.length; i++) {
        mines[i].innerHTML = '?'
    }
}



// callback
//
//
function myCb(cb) {
    data = 234
    cb(data)
}

myCb(function (data) {
    console.log('cb', data)
})



//  | s
//  | s
//  | a  --------> event loop
//  | s
//  |
//  \/
//  a
//  a
//  __

// 2+2
// показати данні
// --хочу данні з серверу
//     щось зробити з данними з серверу

// щось
// щось


const dark = document.querySelector('.dark')
const popup = document.querySelector('.popup')

//show_popup('Hello!') 

function show_popup(msg) {
    log(msg)
    dark.classList.remove("hide")
    popup.classList.remove("hide")

    // 1) Show (msg)
    popup.innerHTML = `
        <img src="Images/page-1.jpg" width="100px" height="60px"  alt="sofia">
        <button onclick="hide_popup()">X</button>
        <h1>${msg}</h1>
    `;
    //
    // 2) Додати картинку і доатково оформити ПОПАП
    //
}

function hide_popup() {
    dark.classList.add("hide")
    popup.classList.add("hide")
}