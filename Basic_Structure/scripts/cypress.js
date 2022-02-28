require('dotenv').config();
const cypress = require('cypress')
const yargs = require('yargs')
const { merge } = require('mochawesome-merge')
const marge = require('mochawesome-report-generator')
const rm = require('rimraf')
const reporterConfig = require('../reporter')
const ls = require('ls')
const path = require('path')
const email = require('../cypress/support/helpers/contact');
const argv = yargs.options({
    'browser': {
        alias: 'b',
        describe: 'choose browser that you wanna run tests on',
        default: 'chrome',
        choices: ['chrome', 'electron']
    },
    'spec': {
        alias: 's',
        describe: 'run test with specific spec file',
        default: 'cypress/integration/**/*.feature',
    }
}).help()
  .argv

const reportDir = reporterConfig.mochawesomeReporterOptions.reportDir
const reportFiles = `${reportDir}/mochawesome*.json`
const reportGeneratorOptions = {
    reportDir: reportDir,
    files: [reportFiles],
    saveHtml: true,
    saveJson: true,
    reportFilename: 'combinedReport',
    inline: true
}
// list all of existing report files
ls(reportFiles, { recurse: true }, file => console.log(`removing ${file.full}`))

// delete all existing report files
rm(reportFiles, (error) => {
    if (error) {
        console.error(`Error while removing existing report files: ${error}`)
        process.exit(1)
    }
    console.log('Removing all existing report files successfully!')
})

cypress.run({
    browser: argv.browser,
    spec: argv.spec
}).then((results) => {
    generateReport(reportGeneratorOptions).then((reportResults) => {
        const reportHtmlLocation = path.join(reportGeneratorOptions.reportDir, reportGeneratorOptions.reportFilename + '.html');
        const testFailures = reportResults.report.stats.failures;
        const dataToEmail = JSON.stringify(reportResults.report.stats, null, 4);
        if (testFailures) {
            console.error("Total Failures: " + reportResults.report.stats.failures);
            const htmlText = "<html><body>Cypress tests FAILED: " + reportResults.report.stats.failures + ".<br>" +
                "See attachment for details<br>" +
                "<pre><code>" + dataToEmail + "</code></pre></body></html>";
            email.sendEmail({
                subject: "Demo test failed",
                html: htmlText,
                attachmentFiles: [reportHtmlLocation],
                callback: () => {process.exit(1)} // Ensure exit(1) so CodeBuild 'fails'
            });
        } else {
            const htmlText = "<html><body>Cypress tests PASSED.<br>" +
                "<pre><code>" + dataToEmail + "</code></pre></body></html>";
            email.sendEmail({
                subject: "Demo test Passed",
                html: htmlText,
            });
        }
    });
}).catch((error) => {
    console.error('errors: ', error)
    process.exit(1)
})

async function generateReport(options) {
    return merge(options).then(async (report) => {
        const reportFiles = await marge.create(report, options);
        return { report: report, Files: reportFiles};
    })
}
