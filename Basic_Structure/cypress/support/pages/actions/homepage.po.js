import { BaseAction } from '../../common/baseAction';
import { StringUtilities } from "../utilities/string.utilities";



export class Homepage extends BaseAction {

    constructor() {
        super();
    }

    elements = {
        // goContactHome: '//img[@id="reseller-login_img"]',
        // USERNAME_INPUT: '//input[@name="email"]',
        // PASSWORD_INPUT: '//input[@name="password"]',
        // SignIn_Btn: '//button[@id="btn-login"]',

        // index.html
            // visible: '//div[@id="error"]',
            // USERNAME_INPUT: '//input[@id="username"]',
            // PASSWORD_INPUT: '//input[@id="password"]',
            // SignIn_Btn: '//input[@id="submit"]',
        
        // SecondPage.html
        USERNAME_INPUT: '//input[@id="name"]',
        PASSWORD_INPUT: '//input[@id="email"]',
        radioButton: '//input[@id="css"]',
        checkBox: '//input[@id="vehicle2"]',
        messages: '//div[@id="error2"]',
        signIn_Btn: '//input[@id="submit"]',
        file : '//input[@id="myfile"]',
        upload: '[id="myfile"]',

        // 3. mail check
        mailName : '//input[@id="name"]',
        mailId : '//input[@id="email"]',
        subject: '//input[@id="subject"]',
        msg : '//textarea[@id="message"]',
        submit_form: '//input[@class="submit"]',

    }

    goContactHome() {
        this.shouldVisible(this.elements.goContactHome);
    }

    loginWith(username, password) {
        cy.log('Login With Username and Password');
        this.type(this.elements.USERNAME_INPUT, username);
        this.type(this.elements.PASSWORD_INPUT, password);
        // this.click(this.elements.SignIn_Btn);
    }

    shouldSee(text){
        this.click(this.elements.signIn_Btn)
        this.shouldContainText(this.elements.messages,text)
    }

    radioButton() {
        this.checkToCheckbox(this.elements.radioButton)
        this.checkToCheckboxByValues(this.elements.checkBox, true, "Car")

    }

    checkBox() {
        this.checkToCheckbox(this.elements.radioButton)
        // this.checkToCheckboxByValues(this.elements.checkBox, true, "Car")

    }

    uploadfile(value){
        this.get(this.elements.upload,value)
    }
    
    mailFil(senderName,senderEmail,senderSubject,senderMsg) {
        this.type(this.elements.mailName, senderName)
        this.type(this.elements.mailId, senderEmail)
        this.type(this.elements.subject,senderSubject)
        this.type(this.elements.msg, senderMsg)
        this.click(this.elements.submit_form)
    }
}