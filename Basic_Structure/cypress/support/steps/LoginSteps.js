import {Homepage} from "../pages/actions/homepage.po";
import { BaseAction } from '../common/baseAction';
import { Constant } from "../common/constants";
import * as data from '../../fixtures/data';

const validLogin = data.Login.validLogin;
const invalidPasswordLogin = data.Login.invalidPassword;
const invalidUserNameLogin = data.Login.invalidUserName;
const validation = data.Validation.validDetails;
const homepage =  new Homepage();
const baseAction = new BaseAction();

When("Login with correct username and password", () => {
    baseAction.openBrowser(Constant.BASE_URL);
    // homepage.loginWith(login.username, login.password);
    // homepage.shouldSee();
})

Then('I can see the message', () => {
    homepage.loginWith(validLogin.username, validLogin.password);
    homepage.shouldSee(validLogin.loginErrorMessage);
})

When('Login with wrong password', () => {
    homepage.loginWith(invalidPasswordLogin.username, invalidPasswordLogin.password);
    homepage.shouldSee(invalidPasswordLogin.loginErrorMessage)
})

When('Login with wrong username', () => {
    homepage.loginWith(invalidUserNameLogin.username, invalidUserNameLogin.password);
    homepage.shouldSee(invalidUserNameLogin.loginErrorMessage)
})

When('check the checkbox value', () => {
    baseAction.openBrowser(Constant.BASE_URL_2)
    homepage.click('//input[@id="html"]')
   
 
    homepage.checkToCheckboxByValues('//input[@id="vehicle1"]', true, 'Bike','car');
    // homepage.checkToCheckboxByValues('//input[@id="secondCheck"]', true, 'second');
})

// When('Login with correct details', () => {
//     baseAction.openBrowser(Constant.BASE_URL_2);
//     homepage.loginWith(validation.name, validation.email);
// })