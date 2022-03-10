import {Homepage} from "../pages/actions/homepage.po";
import { BaseAction } from '../common/baseAction';
import { Constant } from "../common/constants";
import * as data from '../../fixtures/data';

const homepage =  new Homepage();
const baseAction = new BaseAction();

When('The user sends an email', (table) => {
    baseAction.openBrowser(Constant.BASE_URL_2)
    table.hashes().forEach((row_val) => {
        homepage.mailInfo(row_val.Full_Name, row_val.Email, row_val.Subject, row_val.Message)
    })

})

Then('verify if email is received at destination', () => {
    homepage.mailInfoMsg();
})