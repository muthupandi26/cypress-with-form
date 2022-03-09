import {Homepage} from "../pages/actions/homepage.po";
import { BaseAction } from '../common/baseAction';
import { Constant } from "../common/constants";
import * as data from '../../fixtures/data';

const adminLogin = data.Login.admin;
const adminAgent = data.Login.agent;


const homepage =  new Homepage();
const baseAction = new BaseAction();


When('The user fills a form with the following configurations', () => {
    baseAction.openBrowser(Constant.BASE_URL);
})


Then('verify the form details', () => {

})


