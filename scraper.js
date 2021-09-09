const puppeteer = require('puppeteer')



async function scrapeProd(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)

    const [el] = await page.$x('//*[@id="imgBlkFront"]')

    const src = await el.getProperty('src')
    
    const srcText = await src.jsonValue()

    console.log({srcText})

    browser.close()
}

scrapeProd('https://www.amazon.com/Black-Swan-Improbable-Robustness-Fragility/dp/081297381X/ref=sr_1_2?dchild=1&keywords=black+swan&qid=1631153233&sr=8-2')