const { Builder, By, until } = require('selenium-webdriver');

async function runTest() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.manage().window().maximize();
    await driver.get('https://moveez-project.netlify.app/');

    await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div/div[1]/div/div/a/div/button')), 5000).click();


    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/a/div/button')).click();


    let element = await driver.wait(until.elementLocated(By.className('o-cast')), 10000);
    let text = await element.getText();

    if (text === 'Camille Rows, Sofiane Zermani, Cesar Domboy') {
      console.log('Text matches.Test passed!');
    } else {
      console.log(`Test failed.`);
    }
  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    await driver.quit();
  }
}

runTest();
