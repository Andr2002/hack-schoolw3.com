import puppeteer from 'puppeteer';
import { answersHTML, answersCSS, answersJS } from './answers.js';

export class hack {

    //  метод для теста js
    async JS() {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        await page.goto('https://schoolsw3.com/quiztest/quiztest_JS.php'); //  переход по ссылке на страницу с тестом

        await page.waitForSelector('div.sw3-half:nth-child(2) > input:nth-child(1)'); //  дожидаемся загрузки, находим input для ввода имени и заполняем его
        await page.type('div.sw3-half:nth-child(2) > input:nth-child(1)', 'vk: @oz_detailing');

        await page.waitForSelector('div.sw3-half:nth-child(5) > input:nth-child(1)'); //  дожидаемся загрузки, находим input для ввода e-mail и заполняем его
        await page.type('div.sw3-half:nth-child(5) > input:nth-child(1)', 'mail@mail.ru');

        await page.waitForSelector('button.sw3-button:nth-child(6)'); //  дожидаемся загрузки, находим кнопку и кликаем
        await page.click('button.sw3-button:nth-child(6)');

        await page.waitForSelector('#quizmain > div > a'); //  открывается страница и кликаем еще одну кнопку, чтобы начать проходить тест
        await page.click('#quizmain > div > a');

        //  проходим циклом по всем вопросам и отвечаем, исходя из свойств объекта, заранее инициализированного ответами 
        for (let i in answersJS) {
            await page.waitForSelector('#quizcontainer > form:nth-child(2)');
            await page.click(`label[for="${answersJS[i]}"]`);
            await page.click('.answerbutton');
        }

        await page.waitForTimeout(2000); //  ожидаем 2 секунды, чтобы страница с результатами прогрузилась

        let result = await page.evaluate(() => {
            let time = document.querySelector('#quizmain').children[0].children[2].textContent; //  получаем время, за которое был пройден тест
            let points = document.querySelector('#quizmain > div > h4').textContent.split('\n').slice(-1).toString(); //  получаем количество набранных очков

            let data = {
                time: time,
                points: points
            };

            return data;
        });

        await browser.close();

        return result;
    }

    //  метод для теста html
    //  идентично методу JS()
    async HTML() {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        await page.goto('https://schoolsw3.com/quiztest/quiztest_HTML.php');

        await page.waitForSelector('div.sw3-half:nth-child(2) > input:nth-child(1)');
        await page.type('div.sw3-half:nth-child(2) > input:nth-child(1)', 'vk: @oz_detailing');

        await page.waitForSelector('div.sw3-half:nth-child(5) > input:nth-child(1)');
        await page.type('div.sw3-half:nth-child(5) > input:nth-child(1)', 'mail@mail.ru');

        await page.waitForSelector('button.sw3-button:nth-child(6)');
        await page.click('button.sw3-button:nth-child(6)');

        await page.waitForSelector('#quizcontainer > a');
        await page.click('#quizcontainer > a');

        for (let i in answersHTML) {
            await page.waitForSelector('#altcontainer');
            await page.click(`label[for="${answersHTML[i]}"]`);
            await page.click('.answerbutton');
        }

        await page.waitForTimeout(2000);

        let result = await page.evaluate(() => {
            let time = document.querySelector('#quizcontainer > p:nth-child(3) > b').textContent;
            let points = document.querySelector('#quizcontainer > h4').textContent;

            const data = {
                time: time,
                points: points
            };

            return data;
        });

        await browser.close();

        return result;
    }

    async CSS() {
        const browser = await puppeteer.launch({ headless: false });

        const page = await browser.newPage();

        await page.setViewport({
            height: 1000,
            width: 1050,
        });

        await page.goto('https://schoolsw3.com/quiztest/quiztest_CSS.php');

        await page.waitForSelector('div.sw3-half:nth-child(2) > input:nth-child(1)');
        await page.type('div.sw3-half:nth-child(2) > input:nth-child(1)', 'vk: @oz_detailing');

        await page.waitForSelector('div.sw3-half:nth-child(5) > input:nth-child(1)');
        await page.type('div.sw3-half:nth-child(5) > input:nth-child(1)', 'mail@mail.ru');

        await page.waitForSelector('button.sw3-button:nth-child(6)');
        await page.click('button.sw3-button:nth-child(6)');

        await page.waitForSelector('#quizmain > div > a');
        await page.click('#quizmain > div > a');

        for (let i in answersCSS) {
            await page.waitForSelector('#quizcontainer > form:nth-child(2)');
            await page.click(`label[for="${answersCSS[i]}"]`);
            await page.click('.answerbutton');
        }

        await page.waitForTimeout(2000);

        let result = await page.evaluate(() => {
            let time = document.querySelector('#quizmain > div:nth-child(1) > p:nth-child(3)').textContent;
            let points = document.querySelector('#quizmain > div > h4').textContent.split('\n').slice(-1).toString();

            const data = {
                time: time,
                points: points
            };

            return data;
        });

        await browser.close();

        return result;
    }
}
