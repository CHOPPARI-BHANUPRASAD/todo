const { Builder, By, Key } = require("selenium-webdriver");

async function example(){

    let driver = await new Builder().forBrowser("MicrosoftEdge").build();

    await driver.get("http://127.0.0.1:5501/index.html")

    await driver.findElement(By.id("taskInput")).sendKeys("hello mam ", Key.RETURN);
}
example()