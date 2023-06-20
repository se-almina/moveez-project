const { Builder, By, until} = require('selenium-webdriver');

async function runTest() {
  let driver = await new Builder().forBrowser('chrome').build(); // or 'firefox', depending on your installed driver

  try {
    await driver.manage().window().maximize();
    await driver.get('http://localhost:3001/'); // Replace with your app's URL

    await driver.wait(until.elementLocated(By.css('a[href="/movies/647f00fef4d7ecd1902de377"]')), 5000).click();


    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/a/div/button')).click();


    let element = await driver.wait(until.elementLocated(By.className('o-cast')), 10000);
    let text = await element.getText();

    if (text === 'Camille Rows, Sofiane Zermani, Cesar Domboy') {
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
