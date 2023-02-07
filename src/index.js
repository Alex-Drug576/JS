var stringsInCebab = ['border-top-left-width', 'font-size', 'background-color'];

let arr = stringsInCebab.map((item) => {
    let str = '';
    for(var i = 0; i < item.length; i++){
        if(item[i - 1] === '-'){
            str += item[i].toUpperCase();
        } else if(item[i] !== '-'){
            str += item[i];
        }
    }
    return str;
});
console.log(arr);




