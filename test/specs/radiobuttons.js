const chaiexpect = require('chai').expect

describe('Test UI items', ()=>{
    xit('Test radio buttons', ()=>{
        browser.url('/loginpagePractise/')
        $("#username").setValue('rahulshettyacademy')
        $("#password").setValue('learning')
        const radio_buttons = $$(".customradio")
        const user = radio_buttons[1].$('.checkmark')
        const admin = radio_buttons[0].$('.checkmark')
        user.click()

        const popup = $(".modal-body")
        popup.waitForDisplayed()
        $("button#cancelBtn").click()

        user.click()
        popup.waitForDisplayed()
        $("button#okayBtn").click()
        admin.click()
        expect(popup).not.toBeDisplayed()

        //dropdowns
        const dropdown = $("select.form-control")
        dropdown.selectByAttribute('value', 'teach')

        dropdown.selectByVisibleText('Consultant')

        dropdown.selectByIndex(0)

        chaiexpect(dropdown.getValue()).to.equal('stud')
    })
    
    it('Test dynamic dropdowns', ()=> {
        browser.url('/AutomationPractice/')

        $('#autocomplete').setValue('Ind')
        $('.ui-menu-item').waitForDisplayed()
        let items = $$('.ui-menu-item div')

        for (i=0;i<items.length; i++) {
            console.log(items[i].getText())
        }
        const indonesia = items.filter(eachItem=>eachItem.getText() === 'Indonesia')
        indonesia[0].click()
        browser.pause(3000)


    })

    it('Test checkboxes', ()=>{
        browser.url('/AutomationPractice/')
        const checkboxes = $$("input[type='checkbox']")
        checkboxes[1].click()
        console.log(checkboxes[1].isSelected())
        console.log(checkboxes[0].isSelected())
        browser.saveScreenshot('test_screenshot.png')
    })

})