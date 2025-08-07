import { test } from "@playwright/test";
test(`To Edit the lead`, async ({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator(`//input[@name="USERNAME"]`).fill("demosalesmanager");
    await page.locator(`//input[@name="PASSWORD"]`).fill("crmsfa");
    await page.locator(`//input[@value="Login"]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`//div[@class="crmsfa"]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`//a[text()="Leads"]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`//a[text()="Find Leads"]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`(//input[@name="firstName"])[3]`).fill("KUMAR");
    await page.waitForTimeout(3000);
    await page.locator(`//button[text()="Find Leads"]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`(//a[@class="linktext"])[4]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`//a[text()="Edit"]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`//input[@id="updateLeadForm_companyName"]`).selectText();
    await page.waitForTimeout(3000);
    await page.locator(`//input[@id="updateLeadForm_companyName"]`).clear();
    await page.waitForTimeout(3000);
    await page.locator(`//input[@id="updateLeadForm_companyName"]`).fill("QEAGLE Trainings");
    await page.waitForTimeout(3000);
    await page.locator(`//input[@id="updateLeadForm_annualRevenue"]`).fill("33 Millions")
    await page.waitForTimeout(3000);
    await page.locator(`//input[@id="updateLeadForm_departmentName"]`).fill("Commerce Dept")
    await page.waitForTimeout(3000);
    await page.locator(`//textarea[@id="updateLeadForm_description"]`).fill("Editted Annual Revenue and Department")
    await page.waitForTimeout(3000);
    await page.locator(`//input[@value="Update"]`).click();
    await page.waitForTimeout(3000);
    const title = page.title();
    console.log(`The Title of the Project is `, title);
    await page.waitForTimeout(3000);
    
})