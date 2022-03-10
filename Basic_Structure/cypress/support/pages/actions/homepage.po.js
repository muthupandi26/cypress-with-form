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
        USERNAME_INPUT: '//input[@id="name"]',
        PASSWORD_INPUT: '//input[@id="email"]',
        RADIO_INPUT : '//input[@type="radio"]',
        CHECK_BOX: '//input[@type="checkbox"]',
        UPLOADS: '[id="myfile"]',
        SignIn_Btn : '//input[@id="submit"]',
        messages: '//div[@id="error2"]',

        // 3. mail check
        mailName : '//input[@id="name"]',
        mailId : '//input[@id="email"]',
        subject: '//input[@id="subject"]',
        msg : '//textarea[@id="message"]',
        submit_form: '//input[@class="submit"]',
        mail_submit: '//input[@type="submit"]',

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

    radioButton(radio,checkbox) {
        // this.checkToCheckbox(this.elements.radioButton)
        this.checkToCheckboxByValues(this.elements.RADIO_INPUT,true, radio);
        this.checkToCheckboxByValues(this.elements.CHECK_BOX, true, checkbox);
    }

    uploadFile(fileName) {
        this.get(this.elements.UPLOADS,fileName)
    }

    errorMsg(textValue) {
        this.click(this.elements.SignIn_Btn);
        this.shouldContainText(this.elements.messages,textValue)
    }

    mailInfo(fullName, mailId, subject, text) {
        this.type(this.elements.mailName,fullName);
        this.type(this.elements.mailId, mailId);
        this.type(this.elements.subject, subject);
        this.type(this.elements.msg, text)
    }

    mailInfoMsg() {
        this.click(this.elements.mail_submit)
    }


}