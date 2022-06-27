import puppeteer from 'puppeteer';

await hack().then((res) => {
    // console.log(res.indexOf('<script>'));
    console.log('res');
});

async function hack() {
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

    // 1st question
    await page.waitForSelector('#quizcontainer > form:nth-child(2)');
    await page.click(`label[for="${await answer1(page).then((res)=>{return res;})}"]`);

    // await browser.close();

    // return q1;
}

async function answer1(page) {
    let result = await page.evaluate(() => {
        let res = document.querySelectorAll('.radiocontainer');
        // return res[0].getAttribute('for');

        let arr = [];

        for (let i = 0; i < Object.keys(res).length; i++) {
            arr.push(res[i].textContent.trim());
        }

        return parseInt(arr.indexOf('<script>')) + 1;
    });

    return result;
}