class shopPage {

    get checkout() {
        return $('*=Checkout')
    }

    get items() {
        return $$("div[class='card h-100']")
    }

    addProductsToCart(products) {
        return this.items.filter(item=>products.includes((item.$("div h4 a")).getText()))
        .map(product=>product.$('div button').click())

    }

    getSumOfPrices() {
        var prices = $$("//tr/td[4]/strong").map(each_element=>parseInt(each_element.getText().split('.')[1].trim()))
        prices = prices.reduce((sum,each)=>sum+each, 0)
        return prices
    }

    getSumDisplayed() {
        return parseInt($('td h3 strong').getText().split(' ')[1])
    }
}

module.exports = new shopPage