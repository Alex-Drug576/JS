const fs = require('fs');
let getText = fs.readFileSync('text.txt', 'utf-8').replace(/ /g, '').split('');
function Encrypto() {
    function swap(arr, a, b) {
        arr[a] = arr.splice(b, 1, arr[a])[0];
    }
    swap(getText, 2, 5);
    swap(getText, 1, 4);
    swap(getText, 3, 6);
    swap(getText, 8, 0);
    swap(getText, 9, 12);
    swap(getText, 10, 11);
    console.log(getText.join(''));
}
function Decrypto() {
    function swap(arr, a, b) {
        arr[a] = arr.splice(b, 1, arr[a])[0];
    }
    swap(getText, 5, 2);
    swap(getText, 4, 1);
    swap(getText, 6, 3);
    swap(getText, 0, 8);
    swap(getText, 12, 9);
    swap(getText, 11, 10);
    console.log(getText.join(''));
}

Encrypto();
Decrypto();

