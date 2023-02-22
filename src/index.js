let alphabet = {
    'а': '000000',
    'б': '000001',
    'в': '000010',
    'г': '000011',
    'ґ': '000100',
    'д': '000101',
    'е': '000110',
    'є': '000111',
    'ж': '001000',
    'з': '001001',
    'и': '001010',
    'і': '001011',
    'ї': '001100',
    'й': '001101',
    'к': '001110',
    'л': '001111',
    'м': '010000',
    'н': '010001',
    'о': '010010',
    'п': '010011',
    'р': '010100',
    'с': '010101',
    'т': '010110',
    'у': '010111',
    'ф': '011000',
    'х': '011001',
    'ц': '011010',
    'ч': '011011',
    'ш': '011100',
    'щ': '011101',
    'ь': '011110',
    'ю': '011111',
    'я': '111111',
}
document.querySelector('.second').addEventListener('click', () => {
    let key = document.querySelector('.out').innerHTML.split(',');
    let res = document.querySelector('.out2').innerHTML.split(',');
    for(var i = 1; i < res.length; i++){
        str = ''
        for(var j = 0; j < 6; j++){
            if(res[i][j] === '0' && key[i][j] === '0'){
                str += '0';
            }else if (res[i][j] === '0' && key[i][j] === '1') {
                str += '1';
            }else if (res[i][j] === '1' && key[i][j] === '0') {
                str += '1';
            }else{
                str += '0';
            }
        } 
        res[i] = str;
    }
    res.shift()
    str = ''
    for(var i = 0; i < res.length; i++){
        for(var el in alphabet){
            if(alphabet[el] === res[i])  str += el;
        }
    }
    console.log(str)
})
document.querySelector('.first').addEventListener('click', () => {
    let file = document.getElementById('file').files[0];
    let text = document.querySelector('.text').value;
    let reader = new FileReader();
    
    reader.readAsText(file);
    reader.onload = (e,key) => {
        let fileContent = e.target.result;
        key = getContent(fileContent);
        fn (key);
    };
    
    reader.onerror = () => console.log(reader.error);
    function getContent(content){ 
        return content.split(' ');
    }
    
    function textConvert(str){
        let res = [];
        for(var i = 0; i < str.length; i++){
            for(var key in alphabet){
                if(key === str[i].toLowerCase())  res.push(alphabet[key]);
            }
        }
        return res;
    }
    function fn(arr){
        let res = [];
        text = textConvert(text);
        for(var i = 0; i <= text.length; i++){
            res.push(arr[i]);
        }
        console.log(res)
        console.log(text)
        document.querySelector('.out').innerHTML = res;
        for(var i = 1; i < res.length; i++){
            str = ''
            for(var j = 0; j < 6; j++){
                if(res[i][j] === '0' && text[i-1][j] === '0'){
                    str += '0';
                }else if (res[i][j] === '0' && text[i-1][j] === '1') {
                    str += '1';
                }else if (res[i][j] === '1' && text[i-1][j] === '0') {
                    str += '1';
                }else{
                    str += '0';
                }
            } 
            res[i] = str;
        }
        document.querySelector('.out2').innerHTML = res;
    }
})

