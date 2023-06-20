const { Builder, By, until } = require('selenium-webdriver');

async function runTest() {
    let driver = await new Builder().forBrowser('chrome').build(); // or 'firefox', depending on your installed driver

    try {
        await driver.manage().window().maximize();
        await driver.get('http://localhost:3001/'); // Replace with your app's URL


        await driver.wait(until.elementLocated(By.className('single-movie')), 5000); // Adjust the class name and timeout as needed
        // Assertion: Check if the element is displayed
        const element = await driver.findElement(By.className('single-movie')); // Adjust the class name
        const isDisplayed = await element.isDisplayed();
        console.log('Element with class name is displayed:', isDisplayed);
    } finally {
        await driver.quit();
    }
}

runTest();
