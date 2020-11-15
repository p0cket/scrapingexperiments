const puppeteer = require('puppeteer');

async function scrapeProduct(url) {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null
    });
    const page = await browser.newPage();
    await page.goto(url)
    
    await page.waitForSelector('.infinitescroll-results-grid');

    const selector = '.product-tile-header .pdp-link'
    const whatIsThis = await page.$$eval(
        selector,
        // you have entered the browser :) 
        el => el.map(x => x.getAttribute("data-gtmdata"))
        .map(JSON.parse)
    );
    console.log('whatIsThis', whatIsThis);

    // await page.$$eval('.product-tile-header .pdp-link', el => el.map(x => console.log(x.getAttribute("data-gmtdata"))));
    // const [el] = await page.$x('/html/body/div[7]/div[2]/div[3]/div/div[1]/div/div[2]/div[7]/div[1]/div[2]/div[3]/div/div/div[2]/div[1]/a/div/p');

    browser.close();

    
}

scrapeProduct('https://www.gamestop.com/video-games/more-platforms/nintendo-3ds/pre-owned');