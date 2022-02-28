import { Constant } from './constants';
import { format } from 'util';

const timeout = Constant.TIMEOUT;
export class BaseElement {
    findElement(locator) {
        let control;
        if(locator.startsWith('//')) {
            control = cy.xpath(locator);
        }
        else if(locator.includes('containingText=')) {
            const text = locator.split(' containingText=')[1];
            locator = locator.split(' containingText=')[0];
            control = cy.get(locator, {timeout: timeout}).contains(text);
        }
        else {
            control = cy.get(locator, {timeout : timeout});
        }
        return control;
    }
}
