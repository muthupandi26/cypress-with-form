const addContext = require('mochawesome/addContext');

Cypress.on('test:after:run', (test, runnable) => {
    if (test.state === 'failed') {
        var screenshotName;
        if (runnable.parent.parent.title != '' && runnable.parent.parent.title != undefined) {
            screenshotName = `${runnable.parent.parent.title} -- ${runnable.parent.title} -- ${test.title} (failed).png`.replace(':', '').replace('%3A', '');
        } else {
            screenshotName = `${runnable.parent.title} -- ${test.title} (failed).png`.replace(':', '').replace('%3A', '');
        }
        addContext(
            { test },
            {
                title: "Screenshot",
                value: `../.cypress/screenshots/${Cypress.spec.name}/${screenshotName}`
            }
        )
    }
})