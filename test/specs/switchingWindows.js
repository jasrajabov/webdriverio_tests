const chaiexpect = require('chai').expect

describe('Switching windows', ()=>{
    xit('Test switching window and get title', ()=>{

        browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        $("#openwindow").click()

        const windows = browser.getWindowHandles()
        browser.switchToWindow(windows[1])
        console.log(browser.getTitle())
        browser.switchToWindow(windows[0])
        console.log(browser.getTitle())

    })

    xit('Opening a new window and getting title and pasting in first window', ()=>{

        browser.url("https://rahulshettyacademy.com/AutomationPractice/")
        const box = $("//*[@id='name']")

        browser.newWindow("https://www.google.com")
        const title = browser.getTitle()
        browser.pause(2000)


        browser.switchWindow("https://rahulshettyacademy.com/AutomationPractice/")
        box.setValue(title)

        browser.switchWindow(title)
        console.log(browser.getUrl())

    })

    it('Getting count of link in the frame', ()=>{
        browser.url("https://rahulshettyacademy.com/AutomationPractice/")

        const links = $$("a")
        console.log(links.length)

        browser.switchToFrame($("#courses-iframe"))
        const links_in_frame = $$("a")
        console.log(links_in_frame.length)
        console.log($('=Courses').getTagName())

        browser.switchToFrame(null) //switches back to default frame
        const newlinks = $$("a")
        console.log(newlinks.length)

    })
})