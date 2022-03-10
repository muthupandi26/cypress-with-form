import {Homepage} from "../pages/actions/homepage.po";
import { BaseAction } from '../common/baseAction';
import { Constant } from "../common/constants";
import * as data from '../../fixtures/data';

const adminLogin = data.Login.admin;
const adminAgent = data.Login.agent;


const homepage =  new Homepage();
const baseAction = new BaseAction();


When('The user fills a form with the following configurations', (table) => {
    baseAction.openBrowser(Constant.BASE_URL);
    table.hashes().forEach( (row) => {
        homepage.loginWith(row.name,row.password)
        homepage.radioButton(row.radio, row.checkbox)
        homepage.uploadFile(row.file)
    })

})


Then('verify the form details', () => {
    homepage.msgReport(adminLogin.loginErrorMessage)
})


