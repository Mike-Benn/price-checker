async function main() {
    const fs = require('fs');
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.example.com');
    const title = await page.evaluate(() => {
        return document.title
    })
    
    const filePath = 'example.js';
    
    fs.writeFile(filePath, sample, (err) => {
        if (err) {
          console.error('Error writing to file:', err);
          return;
        }
        console.log('Data has been saved to the file:', filePath);
      })

    await browser.close();
}

main();
