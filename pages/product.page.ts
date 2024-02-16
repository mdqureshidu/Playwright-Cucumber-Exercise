import { Page } from "@playwright/test"

export class Product {
    private readonly page: Page
    private readonly addToCart: string = 'button[id="add-to-cart-sauce-labs-backpack"]'

    constructor(page: Page) {
        this.page = page;
    }

    public async addBackPackToCart() {
        await this.page.locator(this.addToCart).click()
    }
    public async clickOnLowToHigh() {
        await this.page.locator("#state").selectOption({label:"Price (low to high)"})
        // await this.page.getByRole().selectOption({label: 'Price (low to high)'});
        await this.page.locator("//option[text()='Price (low to high)']").click();
    }
    public async clickOnHighToLow() {
        await this.page.getByPlaceholder('Name (A to Z)').selectOption({ label: 'Price (high to low)' });
        await this.page.locator("//option[text()='Price (high to low)']").click();
    }
    public async verifyLowToHigh() {
        for(const i=0; i<6; i+1){
            const val=Number(await this.page.locator("(//div[@class='inventory_item_price'])["+i+"]").textContent());
            const val1=Number(await this.page.locator("(//div[@class='inventory_item_price'])["+i+1+"]").textContent());
            if(val<val1){
               console.log(val+"is less then" + val1);
            }
        }  
    }
    public async verifyHighToLow() {
        for(const i=0; i<6; i+1){
            const val=Number(await this.page.locator("(//div[@class='inventory_item_price'])["+i+"]").textContent());
            const val1=Number(await this.page.locator("(//div[@class='inventory_item_price'])["+i+1+"]").textContent());
            if(val<val1){
               console.log(val+"is greater then" + val1);
            }
        }
        
    }

    public async selectCart() {
        await this.page.locator(".shopping_cart_link").click();
    }
    public async checkout() {
        await this.page.locator("id=checkout").click();
    }
    public async firstName() {
        await this.page.locator("id=first-name").fill("FirstName");

    }
    public async lastName() {
        await this.page.locator("id=last-name").fill("LastName");

    }
    public async postalCode() {
        await this.page.locator("id=postal-code").fill("1232131");
    }
    public async continue() {
        await this.page.locator("id=continue").click();
    }
    public async finish() {
        await this.page.locator("id=finish").click();
    }
    public async verifyMessage() {
        var value=await this.page.locator("h2").textContent();
        return value;
    }


}
   
