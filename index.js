// var userName;
// do {
//     userName = prompt('What`s your name?');
// } while (!userName)
// alert('Your name is ' + userName);


// var rooms = 20;
// var levels = 5;
// var sum = 0;
// for (var i = 1; i <= levels; i++) {
//     for (var j = 1; j <= rooms; j++) {
//         sum++;
//         console.log('Levels' + i + 'rooms' + sum);
//     }
//     sum = 0;
// }

// for (var i = 1; i <= 9; i++) {
//     for (var j = 1; j <= 10; j++) console.log(i + ' * ' + j + ' = ' + j * i);
// }

// var firTree = "";
// var minHeight = 1;
// var maxHeight = 1;
// var max = 1;
// //Получаем высоту елки 
// var heightFirTree = prompt("Enter the height of the fir-tree:");
// // Если елка не выше 19, то высота ствола дерева будет на 2 отделение
// if (heightFirTree < 19) {
//     var lengthTreeThunk = 2;
//     var treeThunk = 1;
//     var myNumber = 3;
// } else {
//     var lengthTreeThunk = 4;
//     var treeThunk = 1;
//     var myNumber = 5;
// }
// //Находим количество элементов в последней строке
// for (var i = 1; i < heightFirTree; i++) {
//     maxHeight += 2;
// }
// //С начало распределяется по строкам, а потом сколько пробелов нужно в одной строке и количество * в строке
// for (var i = 1; i <= heightFirTree; i++) {
//     max = (maxHeight - minHeight) / 2;
//     for (var j = 1; j <= max; j++) {
//         firTree += ' ';
//     }
//     for (var j = 1; j <= minHeight; j++) {
//         firTree += '*';
//     }
//     firTree += '\n';
//     minHeight += 2;
// }
// treeThunk = (maxHeight - myNumber) / 2;
// //Также само с елкой, только для ствола дерева
// for (var i = 1; i <= lengthTreeThunk; i++) {
//     for (var j = 1; j <= treeThunk; j++) {
//         firTree += ' ';
//     }
//     for (var j = 1; j <= myNumber; j++) {
//         firTree += '*';
//     }
//     firTree += '\n';
// }
// //Вывод результата на экран 
// console.log(firTree);

//Initialize elements
var getHeight = +prompt('What height do you want your fir-tree to be?');
var result = '';
var column;

//building a fir-tree
for (var i = 1; i <= getHeight; i++) {
    for (var j = 1; j <= getHeight - i; j++) result += ' ';
    for (var k = 1; k <= i; k++) result += '*';
    for (var k = 1; k < i; k++) result += '*';
    for (var j = 1; j <= getHeight - i; j++) result += ' ';
    result += '\n'
}
//if the height is not more than 9, then the trunk will be 3 in height, if more,then 4 height
if (getHeight <= 9) {
    column = 2;
} else if (getHeight >= 10) {
    column = 3;
}
//building a trunk
for (var i = 1; i <= column; i++) {
    for (var j = 1; j <= getHeight - 2; j++) {
        result += ' ';
    }
    for (var j = 0; j <= 2; j++) {
        result += '*';
    }
    result += '\n'
}
//console output
console.log(result);

