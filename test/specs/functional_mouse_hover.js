const chaiexpect = require('chai').expect


describe('Test mouse hover', ()=>{
    it('test go to the top button', ()=>{
        browser.url('/AutomationPractice/')
        const mouse_hover = $("#mousehover")
        mouse_hover.scrollIntoView()
        browser.pause(2000)
        mouse_hover.moveTo()
        browser.pause(2000)
        const top = $("=Top")
        browser.pause(2000)
        top.click()

    })

    it('Test W3 school popup practice', ()=>{
        browser.url("/javascript-alert-box-demo.html")
        browser.pause(2000)

        const button = $("button[class='btn btn-default']")
        button.click()

        chaiexpect(browser.isAlertOpen()).to.be.true
        chaiexpect(browser.getAlertText()).to.be.equal('I am an alert box!')

    })
    it('Test sorting the table', ()=>{

        browser.url('/seleniumPractise/#/offers')
        $('tr th:nth-child(1)').click() //nth-child gets child. in xpath it is tr/th[1]

        const textLocators = $$('tr td:nth-child(1)')
        const ListsortedOnBrowser = textLocators.map(each_row=>each_row.getText())

        const ManuallySortedList = ListsortedOnBrowser.slice()

        chaiexpect(ListsortedOnBrowser).to.eql(ManuallySortedList)

    })

    it('Test search box result',  ()=>{
        browser.url('/seleniumPractise/#/offers')
        $("input[id='search-field']").setValue('Tomat')
        const items = $$("tr td:nth-child(1)")

        expect(items).toBeElementsArrayOfSize({eq:1}) //checks if array size is 1
        expect(items).toHaveTextContaining("Tomata")

    })
})