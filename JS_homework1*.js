// HW_1* 
// Задания с разным количеством звездочек.

// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }

//  Вывести в консоль результат работы функции с возрастами 17, 18, 61
//  26. Создать переменную “age_1” и присвоить ей значение 10
//  27. Создать переменную “age_2” и присвоить ей значение 18
//  28. Создать переменную “age_3” и присвоить ей значение 60
//  29. Создать if в котором будете проверять значение переменной age_1
//  30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
//  31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
//  32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
//  33. Иначе выводите “Technical work”.

const checkAge = function (age) {
    if (age < 18) {
        console.log(`You don’t have access cause your age is ${age} It’s less then 18`);
    } else if (age >= 18 && age < 60) {
        console.log(`Welcome !`)
    } else if (age >= 60) {
        console.log(`Keep calm and look Culture channel`)
    } else {
        console.log('Technical work');
    }
}

checkAge(17);
checkAge(18);
checkAge(61);


// 2*:
// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

const checkAge1 = function (age) {
    if (typeof age != "number") {
        console.log(`Error!`);
    } else if (age < 18) {
        console.log(`You don’t have access cause your age is ${age} It’s less then 18`);
    } else if (age >= 18 && age < 60) {
        console.log(`Welcome !`)
    } else if (age >= 60) {
        console.log(`Keep calm and look Culture channel`)
    } else {
        console.log('Technical work');
    }
}

checkAge1(17);
checkAge1(18);
checkAge1(61);
checkAge1(`Cat`)


// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number

const checkAge2 = function (age) {
    console.warn(`Incoming param: ${age}`)
    if (typeof age === "string"){
        age = parseInt(age)
    }
    if (typeof age != "number") {
        console.log(`Error!`);
    } else if (age < 18) {
        console.log(`You don’t have access cause your age is ${age} It’s less then 18`);
    } else if (age >= 18 && age < 60) {
        console.log(`Welcome !`)
    } else if (age >= 60) {
        console.log(`Keep calm and look Culture channel`)
    } else {
        console.log('Technical work');
    }
}

// по очереди:
checkAge2(17);
// checkAge2(18);
// checkAge2(61);
// checkAge2("34");
// checkAge2("7")
// checkAge2("0")
// checkAge2("")
// checkAge2("Cat")


// 4***:
// // Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке.
// запускается только в браузере:

const checkAge3 = function () {
    let age = prompt("Enter age", 17)
    console.warn(`Incoming param: ${age}`)
    if (typeof age === "string"){
        age = parseInt(age)
    }
    if (typeof age != "number") {
        console.log(`Error!`);
    } else if (age < 18) {
        console.log(`You don’t have access cause your age is ${age} It’s less then 18`);
    } else if (age >= 18 && age < 60) {
        console.log(`Welcome !`)
    } else if (age >= 60) {
        console.log(`Keep calm and look Culture channel`)
    } else {
        console.log('Technical work');
    }
}

checkAge3()