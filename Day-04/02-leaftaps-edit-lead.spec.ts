import { test } from "@playwright/test";

test(`Editing the Lead Assignment`, async ({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator(`input[id="username"]`).fill("demosalesmanager");
    await page.locator(`input[id="password"]`).fill("crmsfa");
    await page.locator(`input[type="submit"]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`div[class="crmsfa"]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`a[href="/crmsfa/control/leadsMain"]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`a[href="/crmsfa/control/createLeadForm"]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`input[id="createLeadForm_companyName"]`).fill("QEagle");
    await page.waitForTimeout(3000);
    await page.locator(`input[id="createLeadForm_firstName"]`).fill("KUMAR");
    await page.waitForTimeout(3000);
    await page.locator(`input[id="createLeadForm_lastName"]`).fill("Nani");
    await page.waitForTimeout(3000);
    await page.locator(`input[value="Create Lead"]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`(//a[@class="subMenuButton"])[3]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`input[id="updateLeadForm_companyName"]`).selectText();
    await page.locator(`input[id="updateLeadForm_companyName"]`).clear();
    await page.waitForTimeout(3000);
    await page.locator(`input[id="updateLeadForm_companyName"]`).fill("Qeagle1");
    await page.waitForTimeout(3000);
    await page.locator(`input[value="Update"]`).click();
    await page.waitForTimeout(3000);
    
})