import { firefox, webkit, test } from "@playwright/test";

test(`Firefox Browser Launch Testcase `, async () => {
    const ffBrowser = await firefox.launch();
    const ffContext = await ffBrowser.newContext();
    const ffPage = await ffContext.newPage();
    await ffPage.goto("https://www.redbus.in");
    const ffurl = ffPage.url();
    console.log(`Url of the Firefox Browser Launch is: ${ffurl}`);
    let fftitle = ffPage.title();
    console.log(`Page Title is: ${fftitle}`);

    const edgeBrowser = await webkit.launch();
    const edgeContext = await edgeBrowser.newContext();
    const edgePage = await edgeContext.newPage();
    await edgePage.goto("https://www.flipkart.in");
    const edgeurl = edgePage.url();
    console.log(`Url of the Firefox Browser Launch is: ${edgeurl}`);
    let edgetitle = edgePage.title();
    console.log(`Page Title is: ${edgetitle}`);

    
    
})

