import { test } from "@playwright/test";
test (`Sales Force login`, async ({page}) => {
    await page.goto("https://login.salesforce.com/");
    await page.locator(`input[class="input r4 wide mb16 mt8 username"]`).fill("chindukuri26162@agentforce.com");
    await page.locator(`input[class="input r4 wide mb16 mt8 password"]`).fill("Kumar@4132")
    await page.locator(`input[class="button r4 wide primary"]`).click();
    await page.waitForTimeout(10000);
    const title = await page.title();
    console.log('Title of the page is: ', title);
    const pageUrl = page.url();
    console.log('Url  of the page is: ', pageUrl);
    
    
})