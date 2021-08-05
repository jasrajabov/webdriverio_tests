class loginPage {

    get username() {
        return $("#username")
    }

    get password() {
        return $("#password")
    }

    get signIn() {
        return $("#signInBtn")
    }

    get alertMessage() {
        return $(".alert-danger")
    }

    get displayText() {
        return $("p.text-white")
    } 

    get admin() {
        return $$(".customradio")[0].$('.checkmark')
    }

    get user() {
        return $$(".customradio")[1].$('.checkmark') 
    }

    login(username, password) {
        this.username.setValue(username)
        this.password.setValue(password)
        this.signIn.click()
    }
}

module.exports = new loginPage