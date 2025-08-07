import { expect, test } from "@playwright/test";
test(`Creating leads in sales force`,async ({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator(`//input[@name="USERNAME"]`).fill("demosalesmanager");
    await page.locator(`//input[@name="PASSWORD"]`).fill("crmsfa");
    await page.locator(`//input[@value="Login"]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`//div[@class="crmsfa"]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`//a[text()="Leads"]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`//a[text()="Create Lead"]`).click();
    await page.waitForTimeout(3000);
    await page.locator(`//input[@id="createLeadForm_companyName"]`).fill("QEagle");
    await page.waitForTimeout(3000);
    await page.locator(`//input[@id="createLeadForm_firstName"]`).fill("KUMAR");
    await page.waitForTimeout(3000);
    await page.locator(`//input[@id="createLeadForm_lastName"]`).fill("Nani");
    await page.waitForTimeout(3000);
    await page.locator(`//input[@name="personalTitle"]`).fill("Mr."); //Salutation
    await page.locator(`//input[@name="generalProfTitle"]`).fill("Welcome"); //Title
    await page.locator(`//input[@name="annualRevenue"]`).fill("2.5 Millions"); //Annual Revenue
    await page.locator(`//input[@name="departmentName"]`).fill("Electronics"); //Department
    await page.locator(`//input[@name="numberEmployees"]`).fill("9898979796"); // Phone Number
    await page.locator(`//input[@value="Create Lead"]`).click();
    //const companyName = await page.locator(`//span[@id="viewLead_companyName_sp"]`).getByText("");
    //console.log(companyName);
    const title = await page.title();
    console.log(`The Title of the Page is: `, title);
    
    
})