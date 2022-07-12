import { hack } from './hackClass.js';

const hacks = new hack();

// await executeCSS();

// await executeHTML();

// await executeJS();

async function executeHTML() {
    console.log('Начинается выполнение теста по HTML...');

    await hacks.HTML()
        .then((res) => {
            console.log('Время в секундах: ' + res);
            console.log('\nStatus: ok\n');
        })
        .catch((err) => {
            console.log('\nStatus: bad\n');
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
            console.log('error');
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
