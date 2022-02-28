import { BaseElement } from './baseElement';

export class BaseAction extends BaseElement {

    type(locator, value) {
        const element = this.findElement(locator);
        element.should('be.visible').not('[disabled]').clear().type(value);
    }

    click(locator, isForce = false, isMultiple = false) {
        const element = this.findElement(locator);
        isForce ? 
        isMultiple ?
        element.should('be.visible').not('[disabled]').click({ force: true , multiple : true}) 
        : element.should('be.visible').not('[disabled]').click({ force: true })
        : isMultiple ?
        element.should('be.visible').not('[disabled]').click({multiple : true}) 
        : element.should('be.visible').not('[disabled]').click();
    }

    clickVisibleElementOnly(locator, isForce = false) {
       const element = this.findElement(locator);
       element.each(($el) => {
           cy.log($el.length);
           if ($el.is(':visible')) {
            cy.log("Element is"+ cy.wrap($el));  
            isForce ? cy.wrap($el).click({ force: true }) : cy.wrap($el).click();
           }
       });
   }

    leaveMouse(locator) {
        const element = this.findElement(locator);
        element.trigger('mouseleave');
    }

    focusToTheElement(locator) {
        const element = this.findElement(locator);
        element.first().focus();
    }

    clickWithoutTarget(locator) {
        const element = this.findElement(locator);
        element.should('be.visible').invoke('removeAttr', 'target').click();
    }

    clickNotVisible({ locator, isForce = false }) {
        const element = this.findElement(locator);
        isForce ? element.not('[disabled]').click({ force: true }) : element.not('[disabled]').click();
    }

    scrollIntoElement(locator) {
        const element = this.findElement(locator);
        element.scrollIntoView().should('be.visible');
    }

    doubleClick(locator) {
        const element = this.findElement(locator);
        element.should('be.visible').dblclick();
    }

    checkToCheckbox(locator) {
        const element = this.findElement(locator);
        if (element.not('[value=false]')) {
            element.check().should('be.checked');
        } else {
            element.should('be.checked');
        }
    }

    uncheckToCheckbox(locator) {
        const element = this.findElement(locator);
        if (element.not('[value=true]')) {
            element.check().should('not.be.checked');
        } else {
            element.should('not.be.checked');
        }
    }

    checkToCheckboxByValues(locator, isChecked, ...values) {
        const element = this.findElement(locator);
        if (isChecked) {
            element.not('[disabled]').check(values).should('be.checked');
        } else {
            element.not('[disabled]').uncheck(values).should('not.be.checked');
        }
    }

    selectTheOption(locator, value) {
        this.click(locator);
        const valueEl = 'xpath=//div[@class="visible menu transition"]//span[contains(.,"' + value + '")]';
        this.click(valueEl);
    }

    selectMultiOptions(locator, ...values) {
        this.click(locator);
        values.each(item => {
            cy.log(`${item}`);
            const valueEl = 'xpath=//div[@class="visible menu transition"]//span[contains(.,"' + item + '")]';
            this.click(valueEl);
        });
    }

    shouldHasValue(locator, value, negative = true) {
        const should = negative ? 'have' : 'not.have';
        const element = this.findElement(locator);
        element.should(`${should}.value`, value);
    }

    shouldContainText(locator, text) {
        const element = this.findElement(locator);
        element.then(el => {
            expect(el.text()).to.contain(text);
        });
    }

    shouldHasText(locator, text, negative = true) {
        const should = negative ? 'have' : 'not.have';
        const element = this.findElement(locator);
        element.should(`${should}.text`, text);
    }

    shouldHasStyle(locator, style) {
        const element = this.findElement(locator);
        element.should('have.attr', 'style', style);
    }

    shouldVisible(locator, negative = true) {
        const should = negative ? 'be' : 'not.be';
        const element = this.findElement(locator);
        element.should(`${should}.visible`);
    }

    isVisible(locator) {
        const element = this.findElement(locator);
        element.then(($el) => {
            return $el.is(':visible');
        })
    }

    openBrowser(url) {
        cy.visit(url);
    }

    checkUrlContain(text) {
        cy.url().should('include', text);
    }

    timeInSecond(ms) {
        return ms * 1000;
    }

    wait(s) {
        cy.wait(s * 1000);
    }


    async getText(locator) {
        const element = this.findElement(locator);
        const text = await promisify(element.then($el => $el.text()));
        return text.toString();
    }

    async isControlExist(locator) {
        try {
            this.findElement(locator);
            const lengthOfElement = await promisify(element.then($el => $el.length));
            return lengthOfElement !== 0;
        } catch (e) {
            return false;
        }
    }

    async getAttributeElement(locator, attributeName) {
        const element = this.findElement(locator);
        const attributeOfElement = await promisify(element.then($el => $el.attr(attributeName) || 'null'));
        return attributeOfElement.toString();
    }

    async countElement(locator) {
        let lengthOfElement = 0;
        const element = this.findElement(locator);
        lengthOfElement = await promisify(element.then($el => $el.length));
        return lengthOfElement;
    }
}
