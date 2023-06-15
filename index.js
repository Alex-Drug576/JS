// Функція для шифрування рядка
function encryptString(inputString, scrambler, key) {
  let encryptedString = '';
  const scramblerLength = scrambler.length;

  for (let i = 0; i < inputString.length; i++) {
    const inputChar = inputString.charCodeAt(i);
    const scramblerChar = scrambler.charCodeAt(i % scramblerLength);
    const keyChar = key.charCodeAt(i % key.length);
    const encryptedChar = inputChar ^ scramblerChar ^ keyChar;
    encryptedString += String.fromCharCode(encryptedChar);
  }

  return encryptedString;
}

// Функція для дешифрування рядка
function decryptString(encryptedString, scrambler, key) {
  let decryptedString = '';
  const scramblerLength = scrambler.length;

  for (let i = 0; i < encryptedString.length; i++) {
    const encryptedChar = encryptedString.charCodeAt(i);
    const scramblerChar = scrambler.charCodeAt(i % scramblerLength);
    const keyChar = key.charCodeAt(i % key.length);
    const decryptedChar = encryptedChar ^ scramblerChar ^ keyChar;
    decryptedString += String.fromCharCode(decryptedChar);
  }

  return decryptedString;
}

// Введення даних користувачем
const inputString = prompt('Введіть рядок для шифрування:');
const scrambler = prompt('Введіть скремблер:');
const key = prompt('Введіть ключ:');

// Шифрування рядка
const encryptedString = encryptString(inputString, scrambler, key);
console.log('Зашифрований рядок:', encryptedString);

// Дешифрування рядка
const decryptedString = decryptString(encryptedString, scrambler, key);
console.log('Дешифрований рядок:', decryptedString);
