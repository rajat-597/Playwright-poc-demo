import { expect } from "@playwright/test";

export class HomePage{

    constructor(page){
        this.page = page;
        this.productOptions = "//div[@id = 'tbodyid']/div/div";
        this.alertBtm = "//a[normalize-space(text()) = 'Add to cart']"
        this.cartBtn = '#cartur';

    }

    async selectProduct(productName){
      const options =   await this.page.$$(this.productOptions);

      for(let option of options){
        const product = await option.textContent();
        if(product.includes(productName)){
           await option.click();
           break;
        }
      }

      await this.page.on('dialog', async(dialog) => {
       if(dialog.message().includes('Product')){
             await dialog.accept();
       }
      })
      await this.page.locator(this.alertBtm).click();

    }

    async clickCart(){
    const cart = await this.page.locator(this.cartBtn);
    await cart.waitFor({ state: 'visible' });
    await cart.click();
    }

}