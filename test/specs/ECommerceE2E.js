const chaiexpect = require('chai').expect

describe('Test ECommerce e2e', ()=>{
    it('Test adding to cart', ()=>{

        browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        $("#username").setValue('rahulshettyacademy')
        $("#password").setValue('learning')
        const radio_buttons = $$(".customradio")
        const user = radio_buttons[1].$('.checkmark')
        const admin = radio_buttons[0].$('.checkmark')
        admin.click()

        $("#signInBtn").click()
        $('*=Checkout').waitForExist()

        const items = $$("div[class='card h-100']")
        var products = ['Blackberry', 'Nokia Edge']

        items.filter(item=>products.includes((item.$("div h4 a")).getText())).map(product=>product.$('div button').click())

        $('*=Checkout').click()

        var prices = $$("//tr/td[4]/strong").map(each_element=>parseInt(each_element.getText().split('.')[1].trim()))
        prices = prices.reduce((sum,each)=>sum+each, 0)
        console.log(prices)

        const sumDisplayed = parseInt($('td h3 strong').getText().split(' ')[1])

        chaiexpect(prices).to.be.equal(sumDisplayed)

        $(".btn-success").click()
        

        $("input[id='country']").setValue('Uni')
        $(".lds-ellipsis").waitForExist({reverse: true})
        $("=United States of America").click()
        $(".btn-success").click()
        expect($("//div/div/strong")).toHaveTextContaining('Success')
    })
})