let a = 89
let b = 10

// 0 == Null => true
// 0 === Null => false

let info = prompt('Enter a number')

// if (+info == b) {
//     console.log('info equal b')
// } else {
//     console.log('info not equal b')
// }

// console.log(a % b)

if (isNaN(+info)) {
    console.log('eto stroka' + ' ' + info)
} else {
    console.log('eto chislo' + ' ' + (+info + 5))
}

// isNaN() - proverka na ne chislo

// isNaN('a') => true
// isNaN(10) => false