import puppeteer from 'puppeteer';
import { answersJS, answersHTML } from './answers.js';

export class hack {

    //  метод для теста js
    async JS() {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        await page.goto('https://schoolsw3.com/quiztest/quiztest_JS.php');  //  переход по ссылке на страницу с тестом

        await page.waitForSelector('div.w3-half:nth-child(2) > input:nth-child(1)');  //  дожидаемся загрузки, находим input для ввода имени и заполняем его
        await page.type('div.w3-half:nth-child(2) > input:nth-child(1)', 'inst: the_andr_');

        await page.waitForSelector('div.w3-half:nth-child(5) > input:nth-child(1)');  //  дожидаемся загрузки, находим input для ввода e-mail и заполняем его
        await page.type('div.w3-half:nth-child(5) > input:nth-child(1)', 'sleek.2000@bk.ru');

        await page.waitForSelector('button.w3-button:nth-child(6)');  //  дожидаемся загрузки, находим кнопку и кликаем
        await page.click('button.w3-button:nth-child(6)');

        await page.waitForSelector('#quizmain > div > a');  //  открывается страница и кликаем еще одну кнопку, чтобы начать проходить тест
        await page.click('#quizmain > div > a');

        //  проходим циклом по всем вопросам и отвечаем, исходя из свойств объекта, заранее инициализированного ответами 
        for (let i = 0; i < Object.keys(answersJS).length; i++) {
            await page.waitForSelector('#quizcontainer > form:nth-child(2)');
            await page.click(`label[for="${answersJS[i]}"]`);
            await page.click('.answerbutton');
        }

        await page.waitForTimeout(2000);  //  ожидаем 2 секунды, чтобы страница с результатами прогрузилась

        let result = await page.evaluate(() => {
            let time = document.querySelector('#quizmain').children[0].children[2].textContent;  //  получаем время, за которое был пройден тест
            let points = document.querySelector('#quizmain > div > h4').textContent.split('\n').slice(-1).toString();  //  получаем количество набранных очков

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
            let time = document.querySelector('#quizcontainer > div > p:nth-child(3)').children[0].textContent;
            return time;
        });

        await browser.close();

        return result;
    }
    
    async CSS() {
        const browser = await puppeteer.launch({
            headless: true,
            // args: [
            //     '--disable-site-isolation-trials'
            // ]
        });

        const page = await browser.newPage();

        await page.setViewport({
            height: 1000,
            width: 1050,
        });

        await page.goto('https://schoolsw3.com/quiztest/quiztest_CSS.php');

        await page.waitForSelector('div.w3-half:nth-child(2) > input:nth-child(1)').then(() => {
            // console.log('Найден input ввода имени');
        });
        await page.type('div.w3-half:nth-child(2) > input:nth-child(1)', 'inst: the_andr_').then(() => {
            // console.log('Имя введено');
        });

        await page.waitForSelector('div.w3-half:nth-child(5) > input:nth-child(1)').then(() => {
            // console.log('Найден input ввода e-mail');
        });
        await page.type('div.w3-half:nth-child(5) > input:nth-child(1)', 'sleek.2000@bk.ru').then(() => {
            // console.log('E-mail введен');
        });

        await page.waitForSelector('button.w3-button:nth-child(6)').then(() => {
            // console.log('Найдена кнопка начала тестирования (черная)');
        });
        await page.click('button.w3-button:nth-child(6)').then(() => {
            // console.log('Нажата кнопка (черная)');
        });

        await page.waitForSelector('#quizmain > div > a').then(() => {
            // console.log('Найдена кнопка начала тестирования (зеленая)');
        });
        await page.click('#quizmain > div > a').then(() => {
            // console.log('Нажата кнопка (зеленая)');
        });

        for (let i in answersCSS) {
            // console.log(`Вопрос ${Number(i) + 1}`);
            await page.waitForSelector('#quizcontainer > form:nth-child(2)').then(() => {
                // console.log('Найдена форма вопросов');
            });
            await page.click(`label[for="${answersCSS[i]}"]`).then(() => {
                // console.log('Нажат ответ на вопрос (for="' + answersCSS[i] + '")');
            });
            await page.click('.answerbutton').then(() => {
                // console.log('Нажата кнопка ответа на вопрос');
            });
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
