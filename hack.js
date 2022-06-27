import { hack } from './hackClass.js';

const hacks = new hack();

// await hacks.JS()
//     .then((res) => {
//         console.log(`${res.time}\n${res.points}`);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
while (true) {
    await hacks.HTML()
        .then((res) => {
            console.log('Время в секундах: ' + res);
            console.log("Status: заебись\n");
        })
        .catch((err) => {
            console.log('Status: хуйня полная\n');
            // console.error(err);
        });
}


//#region old way
// for (let i = 0; i < Object.keys(answers).length; i++) {
//     await page.waitForSelector('#quizcontainer > form:nth-child(2)');
//     await page.click(`label[for="${await replyToQuestion(page, answers[i]).then((index)=>{return index;})}"]`);
//     await page.click('.answerbutton');
// }

// async function replyToQuestion(page, answer) {
//     let result = await page.evaluate((answer) => {
//         let res = document.querySelectorAll('.radiocontainer');
//         let index = 1;

//         for (let i = 0; i < Object.keys(res).length; i++) {
//             if (res[i].textContent.trim() === answer) {
//                 index = res[i].getAttribute('for');
//             }
//         }

//         return index;
//     });

//     return result;
// }
//#endregion