import {Homepage} from "../pages/actions/homepage.po";
import { BaseAction } from '../common/baseAction';
import { Constant } from "../common/constants";
import * as data from '../../fixtures/data';

const homepage =  new Homepage();
const baseAction = new BaseAction();

When('The user sends an email', () => {
    baseAction.openBrowser(Constant.BASE_URL)
})

Then('verify if email is received at destination', () => {
    
})