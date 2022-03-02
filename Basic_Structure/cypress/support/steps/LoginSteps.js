import {Homepage} from "../pages/actions/homepage.po";
import { BaseAction } from '../common/baseAction';
import { Constant } from "../common/constants";
import * as data from '../../fixtures/data';

const validLogin = data.Login.validLogin;
const invalidPasswordLogin = data.Login.invalidPassword;
const invalidUserNameLogin = data.Login.invalidUserName;
//secondPage.html
const validation = data.Validation.validDetails;
const invalidEmail = data.Validation.invalidEmail;
const invalidRadio = data.Validation.invalidRadio;
const invalidCheck = data.Validation.invalidCheck;

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

// When('check the checkbox value', () => {
//     baseAction.openBrowser(Constant.BASE_URL_2)
//     homepage.click('//input[@id="html"]')
   
 
//     homepage.checkToCheckboxByValues('//input[@id="vehicle1"]', true, 'Bike','car');
//     // homepage.checkToCheckboxByValues('//input[@id="secondCheck"]', true, 'second');
// })

When('Enter name and email', () => {
    baseAction.openBrowser(Constant.BASE_URL_2);
    homepage.loginWith(validation.name, validation.email);
})

Then('Enter Radio & Checkbox values', () => {
    homepage.radioButton();
})

Then('Form result', () => {
    homepage.shouldSee(validation.text);
})

When('Enter name without email', () => {
    baseAction.openBrowser(Constant.BASE_URL_2);
    homepage.loginWith(invalidEmail.name, invalidEmail.email);
})

Then('Form result 2', ()=> {
    homepage.shouldSee(invalidEmail.text)
})

When('Missing Radio button value', () => {
    baseAction.openBrowser(Constant.BASE_URL_2);
    homepage.loginWith(invalidRadio.name,invalidRadio.email);
})

Then('Form result 3', () => {
    homepage.shouldSee(invalidRadio.text)
})

When('Missing Checkbox value' , () => {
    baseAction.openBrowser(Constant.BASE_URL_2);
    homepage.loginWith(invalidCheck.name,invalidCheck.email);
})

Then('Form result 4', ()=> {
    homepage.checkBox();
    homepage.shouldSee(invalidCheck.text)
})