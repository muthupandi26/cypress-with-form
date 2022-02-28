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

        visible: '//div[@id="error"]',
        USERNAME_INPUT: '//input[@id="username"]',
        PASSWORD_INPUT: '//input[@id="password"]',
        SignIn_Btn: '//input[@id="submit"]',
    }

    goContactHome() {
        this.shouldVisible(this.elements.goContactHome);
    }

    loginWith(username, password) {
        cy.log('Login With Username and Password');
        this.type(this.elements.USERNAME_INPUT, username);
        this.type(this.elements.PASSWORD_INPUT, password);
        this.click(this.elements.SignIn_Btn);
    }

    shouldSee(text){
        this.shouldContainText(this.elements.visible,text)
    }
}