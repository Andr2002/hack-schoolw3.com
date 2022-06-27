import { hack } from './hackClass.js';

const hacks = new hack();

//  puppeteer уебан косожопый какой-то 
//  каждый раз разные ошибки выкидывает
//  если за ним понаблюдать, то можно увидеть как он сам по себе живет
//  это ебать не библиотека, какой-то искуственный интеллект
//  только тупой пиздец...

//  поэтому въебал цикл
while (true) {
    await executeCSS();
}

// await executeHTML();

// await executeJS();

async function executeHTML() {
    console.log('Начинается выполнение теста по HTML...');

    await hacks.HTML()
        .then((res) => {
            console.log('Время в секундах: ' + res);
            console.log('\nStatus: заебись\n');
        })
        .catch((err) => {
            console.log('\nStatus: хуйня полная\n');
            // console.error(err);
        });
}

async function executeCSS() {
    console.log('Начинается выполнение теста по CSS...');

    await hacks.CSS()
        .then((res) => {
            console.log(`${res.time}\n${res.points}`);
        })
        .catch((err) => {
            // console.log(err);
            console.log('Все хуйня, давай по новой');
        });
}

async function executeJS() {
    console.log('Начинается выполнение теста по JavaScript...');

    await hacks.JS()
        .then((res) => {
            console.log(`${res.time}\n${res.points}`);
        })
        .catch((err) => {
            console.log(err);
        });
}
