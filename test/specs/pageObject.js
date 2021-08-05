const lg = require('../pageObjects/loginPage.js')
const sp = require('../pageObjects/shopPage.js')
const chaiexpect = require('chai').expect
const fs = require('fs')

const creds = JSON.parse(fs.readFileSync('test/test_data/login_creds.json'))
const produtcs = JSON.parse(fs.readFileSync('test/test_data/login_creds.json'))

describe('E-commerce app test', () => {
    creds.forEach((cred, index) => {
        it(
            'Login page test (unsuccessful)', () => {
                browser.url('/loginpagePractise/')
                console.log(browser.getTitle())
    
                lg.login(cred.username, cred.password)
                //waiting until Signing in.. changes to Sign in, then we fetch error value
                // browser.waitUntil(()=>button.getAttribute('value') === 'Sign In', {timeout: 4000, timeoutMsg: "Error message did not appear!"})
                //another way?
                browser.waitUntil(()=>lg.signIn.getValue() === 'Sign In', {timeout: 4000, timeoutMsg: "Error message did not appear!"})
    
                expect(lg.alertMessage).toHaveTextContaining('Incorrect username/password')
                expect(lg.displayText).toHaveTextContaining('(username is rahulshettyacademy and Password is learning)')
            }
        )
    })
    
    it('Test login (happy path) _smoke_', ()=>{

        lg.login('rahulshettyacademy', 'learning')
        const checkout_url_button = $("*=Checkout")
        checkout_url_button.waitForExist()

        expect(browser).toHaveTitleContaining("ProtoCommerce")
        expect(browser).toHaveUrlContaining("/shop")

    })
    produtcs.forEach(({produtcs}) => {
        it('Test adding to cart', ()=>{

            browser.url('/loginpagePractise/')
            lg.login('rahulshettyacademy', 'learning')
            lg.admin.click()
            lg.signIn.click()
    
            sp.checkout.waitForExist()
            var products = ['Blackberry', 'Nokia Edge']
            sp.addProductsToCart(products)
            sp.checkout.click()
    
            const prices = sp.getSumOfPrices()
            const sumDisplayed = sp.getSumDisplayed()
            chaiexpect(prices).to.be.equal(sumDisplayed)
    
            $(".btn-success").click()
            $("input[id='country']").setValue('Uni')
            $(".lds-ellipsis").waitForExist({reverse: true})
            $("=United States of America").click()
            $(".btn-success").click()
            expect($("//div/div/strong")).toHaveTextContaining('Success')
        })
    })
    
})