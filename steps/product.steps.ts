import { Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { expect } from '@playwright/test';

Then('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

Then('I sort the item {string}', async function (value1) {
  if(value1=="high to low"){
    new Product(getPage()).clickOnLowToHigh();
  }else if(value1=="low to high"){
    await new Product(getPage()).clickOnHighToLow();
  }
});

Then('I verify the sort operation {string}', async function (value2) {
  if(value2=="high to low"){
    await new Product(getPage()).verifyLowToHigh();
  }else if(value2=="low to high"){
    await new Product(getPage()).verifyHighToLow();
  }
});

Then('Select the cart', async function () {
  await new Product(getPage()).selectCart();
});


Then('Select Checkout', async function () {
  await new Product(getPage()).checkout();
});

Then('Fill in the First Name Last Name Zip Postal Code', async function () {
  await new Product(getPage()).firstName();
  await new Product(getPage()).lastName();
  await new Product(getPage()).postalCode();
});


Then('Select Continue', async function () {
  await new Product(getPage()).continue();
});

Then('Select Finish', async function () {
  await new Product(getPage()).finish();
});


Then('Validate the text {string}',async function (expectedVal) {
  var actual=await new Product(getPage()).verifyMessage();
  await expect(actual).toEqual(expectedVal);
});
