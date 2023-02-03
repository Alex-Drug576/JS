// const obj1 = {
//     name: 21,
// }
// const obj2 = {
//     userProfile: {
//         age:24,
//     }
// }
// const obj3 = {
//     userProfile: {
//         age:18,
//         city: {
//             address: 34,
//         }
//     }
// }
// var lock = {
//     surname: 'gtit',
//     name: {
//         age: 30,
//     },
// };
// var res = new Object();
// //the function is summed from all psevdo-arrays(object) into one res
// function allFormAll(){
//     for(var i = 0; i < arguments.length; i++){
//         for(var key in arguments[i]){
//             if(typeof arguments[i][key] === 'object'){
//                 allFormAll(arguments[i][key]);
//             }else {
//                 res[key] = arguments[i][key];
//             }
//         }
//     }
// }
// allFormAll(obj1, obj2, obj3, lock);
// console.log(res);

function calcucator(operation){
    var res = 1;
    for(var i = 1; i < arguments.length; i++){
        if(typeof arguments[i] !== 'number') continue;
        switch (operation){
            case '+': 
                res = arguments[i] + res;
                break;
            case '-': 
                (i == 1) ? res = arguments[i] : res -= arguments[i];
                break;
            case '*': 
                res = arguments[i] * res;
                break;
            case '/': 
                (i == 1) ? res = arguments[i] : res /= arguments[i];  
                break;
        }
    }
    if(operation == '+') res -= 1;
    console.log(res);
}
//calcucator('*',11,20);

function reverseString(str){
    var newStr = '';
    for(var i = 1; i <= str.length; i++){
        newStr += str[str.length - i];
    }
    console.log(newStr);
}
//reverseString('dlrow olleh');

function isCharPresent(str, symbol){
    for( var i = 0; i < str.length; i++){
        if(symbol == str[i]){
            console.log(true);
        } else{
            console.log(false);
        }
    }
}
//isCharPresent('hello', 'h')

function charIndexOf(str, symbol){
    for(var i = 0; i < str.length; i++){
        if(str[i] == symbol){
            console.log(i);
        }else{
            console.log(-1);
        }
    }
}
charIndexOf('hello', 'h');