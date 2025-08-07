import { chromium, test } from "@playwright/test";

test (`To check for Sales Force Login`, async() => {

    const browser = await chromium.launch();
    const contest = await browser.newContext();
    const page = await contest.newPage();
    await page.goto("https://login.salesforce.com");
    const url = page.url();
    console.log(`Url of the loggedin page is ${url}`);
    await page.locator(`input[class="input r4 wide mb16 mt8 username"]`).fill("chindukuri26162@agentforce.com");
    await page.locator(`input[class="input r4 wide mb16 mt8 password"]`).fill("Kumar@4132")
    await page.locator(`input[class="button r4 wide primary"]`).click();
    const title = await page.title();
    console.log(`Successfully Loggedin to the ${title} website` );
    await page.locator("div[class=slds-icon-waffle]").click();
    await page.locator(`button[aria-label="View All Applications"]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`input[placeholder="Search apps or items..."]`).fill("Sales");
    await page.waitForTimeout(9000);
    await page.locator(`div[data-name="Sales"]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`a[title="Leads"]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`button[name="New"]`).click();
    await page.waitForTimeout(5000);
    await page.locator(`button[name="salutation"]`).click();
    await page.waitForTimeout(5000);
    await page.locator(`span[title="Mr."]`).click();
    await page.waitForTimeout(5000);
    await page.locator(`input[name="lastName"]`).fill("Test1");
    await page.waitForTimeout(5000);
    await page.locator(`input[name="Company"]`).fill("QEagle");
    await page.waitForTimeout(5000);
    const user = await page.locator(`button[name="SaveEdit"]`).click();
    await page.waitForTimeout(5000);
    console.log(`User ${user} has been created successfully`);
    

    
    
})