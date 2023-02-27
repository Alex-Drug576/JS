document.querySelector('.encrypto').addEventListener('click', () => {
    function sum(){
        let value = document.querySelector('input').value.replaceAll(' ', '');
        let cul = 5 - value.length % 5;
        if(cul != 0 && cul != 5){
            for(var i = 0; i < cul;i++) value += value[i];
        }
        return value;
    }
    function arr(){
        let array = sum();
        let count = 0;
        let res = [];
        for(var i = 0; i < array.length / 5; i++){
            let str = '';
            for(var j = 0; j < 5; j++){
                str += array[count];
                count++;
            }
            res.push(str)
        }
        return res; 
    }
    function swap(arr, a, b) {
        arr[a] = arr.splice(b, 1, arr[a])[0];
    }
    function result(){
        let res = [];
        arr().forEach((arg,index,arr) => {
            arr = arg.split('')
            swap(arr, 2, 0);
            swap(arr, 1, 4);
            swap(arr, 3, 2);
            res.push(arr.join(''));
        })
        console.log(res.join(''));
    }
    result();
})
document.querySelector('.decrypto').addEventListener('click', () => {
    function swap(arr, a, b) {
        arr[a] = arr.splice(b, 1, arr[a])[0];
    }
    function arr(){
        let value = document.querySelector('input').value;
        let res = [];
        let count = 0;
        for(var i = 0; i < value.length / 5; i++){
            let str = '';
            for(var j = 0; j < 5; j++){
                str += value[count];
                count++;
            }
            res.push(str);
        }
        return res;
    }
    function result(){ 
        let res = [];
        arr().forEach((arg,index,arr) => {
            arr = arg.split('');
            swap(arr, 2, 3);
            swap(arr, 0, 2);
            swap(arr, 4, 1);
            res.push(arr.join(''));
        })
        console.log(res.join(''));
    }
    result();
})