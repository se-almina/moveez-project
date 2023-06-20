const { Builder, By, until} = require('selenium-webdriver');

async function runTest() {
  let driver = await new Builder().forBrowser('chrome').build(); // or 'firefox', depending on your installed driver

  try {
    await driver.manage().window().maximize();
    await driver.get('http://localhost:3001/'); // Replace with your app's URL

    await driver.wait(until.elementLocated(By.xpath('//*[@id="root"]/div/div/div[1]/div/div/a/div/button')), 5000).click();


    await driver.findElement(By.xpath('//*[@id="root"]/div/div/div/a/div/button')).click();
    await driver.findElement(By.xpath('/html/body/div/div/div/div[1]/div[1]/div[2]/div[4]/button[2]')).click();

   
    let element = await driver.wait(until.elementLocated(By.css('#root > div > div > div.order-movie > div.cont1 > div.details > div.ticket-number > div')), 5000);
    let text = await element.getText();

    if (text === '2') {
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
