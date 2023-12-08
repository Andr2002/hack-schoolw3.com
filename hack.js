import { hack } from './hackClass.js';

const hacks = new hack();

// await executeCSS();

// await executeHTML();

// await executeJS();

async function executeHTML() {
    console.log('Начинается выполнение теста по HTML...');

    await hacks.HTML()
        .then((res) => {
            console.log(res.points);
        })
        .catch((err) => {
            console.log('[executeHTML] error in: ' + err.message);
        });
}

async function executeCSS() {
    console.log('Начинается выполнение теста по CSS...');

    await hacks.CSS()
        .then((res) => {
            console.log(`${res.time}\n${res.points}`);
        })
        .catch((err) => {
            console.log('[executeCSS] error in: ' + err.message);
        });
}

async function executeJS() {
    console.log('Начинается выполнение теста по JavaScript...');

    await hacks.JS()
        .then((res) => {
            console.log(`${res.time}\n${res.points}`);
        })
        .catch((err) => {
            console.log('[executeJS] error in: ' + err.message);
        });
}
