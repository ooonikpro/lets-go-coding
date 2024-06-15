
/**
 *  Написать функцию, которая возвращает true если строка является полиндромом
 *  Иначе вернуть false.
 * 
 *  Условия: 
 *    1) слова могут быть на русском и английском языках
 *    2) не учитывать знаки препинания, пробелы и регистр букв
 * 
 *  Пример: "a", "bb" "боб", "дед", "Бел хлеб", "Аки лев велика"
 */

const isText = (v) => /[a-zа-я]/i.test(v); // v.toUpperCase() !== v.toLowerCase();
const isNotEqual = (a, b) => a.toLowerCase() !== b.toLowerCase();

const isPalindrome = (str) => {
  if (!str) return false;

  let a = 0;
  let b = str.length - 1;

  while (a < b) {
    let v1 = str[a];
    let v2 = str[b];

    while(!isText(v1)) v1 = str[++a];
    while(!isText(v2)) v2 = str[--b];

    if (isNotEqual(v1, v2)) return false;

    a++;
    b--;
  }

  return true;
}

console.log(isPalindrome('a'));
console.log(isPalindrome('bb'));
console.log(isPalindrome('боб'));
console.log(isPalindrome('дед'));
console.log(isPalindrome('Бел хлеб'));
console.log(isPalindrome('Аки лев велика'));

console.log(isPalindrome('abc'));