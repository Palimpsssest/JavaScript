// Второе домашнее задание по JS со звездочками:

// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let n = 1;
while (n <= 10) {
    let exp = Math.pow(2, n);
    console.log(`2 to the ${n} power = ${exp}`);
    n++;
}


// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const check = function (i) {
    let lls = Math.pow(2, i);
    console.log(`2 to the ${i} power = ${lls}`);
}
check(7);


/*2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):)*/

for (let i = 1; i < 6; i++){
    console.log(':)'.repeat(i));
}


/*2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться
  консоль (как в условии смайлик), а также количество строк для вывода 
e.g. function printSmile(stroka, numberOfRows)*/

function print(word, repeat) {
  for (let i = 1; i <= repeat; i++) {
    console.log(word.repeat(i));
  }
}

print(":)", 10)


/*3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли: 
Слово (word) состоит из  (число) гласных и (число) согласных букв
Проверки: 'case', 'Case', 'Check-list'*/


function lgetWordStructure(word) {
  let vowel = 'aeiouyAEIOUYаеёиоуыэюяАЕЁИОУЫЭЮЯ'; 
  let vcount = 0;
  let consonant = 'bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZбвгджзйклмнпрстфхцчБВГДЖЗЙКЛМНПРСТФХЦЧ'; 
  let ccount = 0;
  
  for(let i = 0; i < word.length ; i++) {
    if (vowel.indexOf(word[i]) != -1) { 
      vcount += 1;
     } else if (consonant.indexOf(word[i]) != -1) { 
       ccount += 1;
    } 
  }
  console.log("Слово "+ word + " состоит из " + vcount + " гласных и " + ccount + " согласных");
}
lgetWordStructure("case")
lgetWordStructure("Case")
lgetWordStructure("Check-list")


//*4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

const isPalindrom = word => word.toLowerCase().split('').reverse().join('') === word.toLowerCase();

console.log(isPalindrom("abba"))
console.log(isPalindrom("Abba"))








