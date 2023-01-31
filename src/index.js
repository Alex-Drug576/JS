const obj = {
    name: 'John',
    surname: 'Smith',
    age: 18,
};
// cloneObj
function cloneObj(obj){
    return obj;
};
let objTwo = cloneObj(obj);
console.log(objTwo);
//getValues
function getValues(obj, separator){
    let result = '';
    for(key in obj){
        result += obj[key] + separator;
    }
    return result;
};
console.log(getValues(obj, ' '));
//getKeys
function getKeys(obj, separator){
    let result = '';
    for(key in obj){
        result += key + separator;
    }
    return result;
};
console.log(getKeys(obj, ' '));
//getEntires
function getEntires(obj){
    let result = '';
    for(key in obj){
        result += key + ' : ' + obj[key] + '\n';
    }
    return result;
};
console.log(getEntires(obj));
