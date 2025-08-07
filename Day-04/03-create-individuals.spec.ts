import { test } from "@playwright/test";

test(`To check for the Create Individuals`, async ({page}) => {

    await page.goto("https://login.salesforce.com");
    await page.waitForTimeout(3000);
    await page.locator(`input[class="input r4 wide mb16 mt8 username"]`).fill("chindukuri26162@agentforce.com");
    await page.locator(`input[class="input r4 wide mb16 mt8 password"]`).fill("Kumar@4132")
    await page.locator(`input[class="button r4 wide primary"]`).click();
    const title = await page.title();
    console.log(`Successfully Loggedin to the ${title} website` );
    await page.locator("div[class=slds-icon-waffle]").click();
    await page.waitForTimeout(3000);
    await page.locator(`button[aria-label="View All Applications"]`).click();
    await page.waitForTimeout(9000);
    await page.locator(`input[placeholder="Search apps or items..."]`).fill("individuals");
    await page.waitForTimeout(9000);
    await page.locator(`//a[@data-label="Individuals"]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`div[class="slds-context-bar__label-action slds-p-left_none slds-p-right_x-small"]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`//span[text()="New Individual"]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`input[placeholder="Last Name"]`).fill("Chindukuri2");
    await page.waitForTimeout(3000);
    await page.locator(`//span[text()="Save"]`).click();
    await page.waitForTimeout(3000);

    
})