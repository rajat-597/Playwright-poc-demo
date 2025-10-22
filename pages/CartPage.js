
export class CartPage{
    constructor(page){
        this.page = page;
        this.productCount = '#tbodyid > tr td:nth-child(2)';
    }

  async presenceOfProduct(pname) {
  const options = await this.page.$$(this.productCount);
  for (let option of options) {
    const text = await option.textContent();
    console.log('Checking product:', text);
    if (text.trim() === pname) {
      return true;
    }
  }
  console.log('Product not found:', pname);
  return false;
}



    // async itemsCount(){
    //  await this.page.waitForSelector(this.productCount);
    //  const options =   await this.page.locator(this.productCount).count();
    //  return options;
    // }
}