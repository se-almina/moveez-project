const { Builder, By, until } = require('selenium-webdriver');

async function runTest() {
    let driver = await new Builder().forBrowser('chrome').build(); // or 'firefox', depending on your installed driver

    try {
        await driver.manage().window().maximize();
        await driver.get('https://moveez-project.netlify.app/'); // Replace with your app's URL

        await driver.wait(until.elementLocated(By.css('#root > div > header > div > a > h1')), 5000).click();


        await driver.findElement(By.xpath('//*[@id="root"]/div/header/div/nav/div/a[2]')).click();


        let element = await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/form/button')), 10000);
        let text = await element.getText();

        if (text === 'Sign up') {
            console.log('Text matches.Test passed!');
        } else {
            console.log(`Text is "${text}". Test failed.`);
        }
    } catch (error) {
        console.error('Test failed:', error);
    } finally {
        await driver.quit();
    }
}

runTest();
