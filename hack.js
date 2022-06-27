import { hack } from './hackClass.js';

const hacks = new hack();

await hacks.JS()
    .then((res) => {
        console.log(`${res.time}\n${res.points}`);
    })
    .catch((err) => {
        console.log(err);
    });

await hacks.HTML()
    .then((res) => {
        console.log('Время в секундах: ' + res);
    })
    .catch((err) => {
        console.error(err);
    });
