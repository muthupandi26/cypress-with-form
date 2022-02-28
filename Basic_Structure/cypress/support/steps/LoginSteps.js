import {Homepage} from "../pages/actions/homepage.po";
import { BaseAction } from '../common/baseAction';
import { Constant } from "../common/constants";
import * as data from '../../fixtures/data';

const validLogin = data.Login.validLogin;
const invalidPasswordLogin = data.Login.invalidPassword;
const invalidUserNameLogin = data.Login.invalidUserName;
const homepage =  new Homepage();
const baseAction = new BaseAction();

When("Visit locally created form", () => {
    baseAction.openBrowser(Constant.BASE_URL);
    // homepage.loginWith(login.username, login.password);
    // homepage.shouldSee();
})

Then('I login that site', () => {
    homepage.loginWith(validLogin.username, validLogin.password);
    homepage.shouldSee(validLogin.loginErrorMessage);
})

When('Login with empty password', () => {
    homepage.loginWith(invalidPasswordLogin.username, invalidPasswordLogin.password);
    homepage.shouldSee(invalidPasswordLogin.loginErrorMessage)
})