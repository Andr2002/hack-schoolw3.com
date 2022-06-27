import puppeteer from 'puppeteer';
import { answersJS, answersHTML } from './answers.js';

// console.log(Object.keys(answersHTML).length);

export class hack {

    async JS() {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        await page.goto('https://schoolsw3.com/quiztest/quiztest_JS.php');

        await page.waitForSelector('div.w3-half:nth-child(2) > input:nth-child(1)');
        await page.type('div.w3-half:nth-child(2) > input:nth-child(1)', 'inst: the_andr_');

        await page.waitForSelector('div.w3-half:nth-child(5) > input:nth-child(1)');
        await page.type('div.w3-half:nth-child(5) > input:nth-child(1)', 'sleek.2000@bk.ru');

        await page.waitForSelector('button.w3-button:nth-child(6)');
        await page.click('button.w3-button:nth-child(6)');

        await page.waitForSelector('#quizmain > div > a');
        await page.click('#quizmain > div > a');

        for (let i = 0; i < Object.keys(answersJS).length; i++) {
            await page.waitForSelector('#quizcontainer > form:nth-child(2)');
            await page.click(`label[for="${answersJS[i]}"]`);
            await page.click('.answerbutton');
        }

        await page.waitForTimeout(2000);

        let result = await page.evaluate(() => {
            let time = document.querySelector('#quizmain').children[0].children[2].textContent;
            let points = document.querySelector('#quizmain > div > h4').textContent.split('\n').slice(-1).toString();

            let data = {
                time: time,
                points: points
            }

            return data;
        });

        await browser.close();

        return result;
    }

    async HTML() {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        await page.goto('https://schoolsw3.com/quiztest/quiztest_HTML.php');

        await page.waitForSelector('div.w3-half:nth-child(2) > input:nth-child(1)');
        await page.type('div.w3-half:nth-child(2) > input:nth-child(1)', 'inst: the_andr_');

        await page.waitForSelector('div.w3-half:nth-child(5) > input:nth-child(1)');
        await page.type('div.w3-half:nth-child(5) > input:nth-child(1)', 'sleek.2000@bk.ru');

        await page.waitForSelector('button.w3-button:nth-child(6)');
        await page.click('button.w3-button:nth-child(6)');

        await page.waitForSelector('#quizcontainer > div > a');
        await page.click('#quizcontainer > div > a');

        for (let i = 0; i < Object.keys(answersHTML).length; i++) {
            await page.waitForSelector('#altcontainer');
            await page.click(`label[for="${answersHTML[i]}"]`);
            await page.click('.answerbutton');
        }

        await page.waitForTimeout(2000);

        let result = await page.evaluate(() => {
            // let time = document.querySelector('#quizcontainer > div > p:nth-child(3)').children[0].children[1].textContent;
            // let points = document.querySelector('#quizcontainer > div > h4').textContent.split('\n').slice(-1).toString();

            // let data = {
            //     time: time,
            //     points: points
            // }

            // return data;

            let time = document.querySelector('#quizcontainer > div > p:nth-child(3)').children[0].textContent;
            return time;
        });

        await browser.close();

        return result;
    }
}