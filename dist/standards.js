"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createLintRule(options) {
    return {
        type: 'lint',
        name: options.name,
        description: options.description,
        packageChanges: options.packageChanges,
        mainScript: options.mainScript,
        templates: options.templates
    };
}
exports.createLintRule = createLintRule;
function createPrettierRule(options) {
    return {
        type: 'format',
        name: "Prettier for " + options.name,
        description: "Prettier formatting for " + options.name + ".",
        packageChanges: options.packageChanges,
        mainScript: options.mainScript,
        templates: ['../templates/format/']
    };
}
exports.createPrettierRule = createPrettierRule;
exports.javaScript = {
    name: 'JavaScript',
    keywords: ['js', 'javascript', '.js', 'jsx', '.jsx'],
    description: '',
    rules: [
        createPrettierRule({
            name: 'JavaScript',
            packageChanges: {
                devDependencies: ['prettier'],
                scripts: {
                    'js:format': 'prettier --write src/**/*.js'
                }
            },
            mainScript: 'js:format'
        }),
        createLintRule({
            name: 'eslint',
            description: 'eslint lint rule for JavaScript',
            packageChanges: {
                devDependencies: ['eslint', '@geekhive/eslint-config-standard'],
                scripts: {
                    'js:lint': 'eslint src/**/*.js src/**/*.jsx'
                }
            },
            mainScript: 'js:lint',
            templates: ['../templates/lint/js']
        })
    ]
};
exports.typeScript = {
    name: 'TypeScript',
    keywords: ['ts', 'typescript', '.ts', 'tsx', '.tsx'],
    description: '',
    rules: [
        createPrettierRule({
            name: 'TypeScript',
            packageChanges: {
                devDependencies: ['prettier'],
                scripts: {
                    'ts:format': 'prettier --write src/**/*.ts src/**/*.tsx'
                }
            },
            mainScript: 'ts:format'
        }),
        createLintRule({
            name: 'TSLint',
            description: 'TSLint lint rule for TypeScript',
            packageChanges: {
                devDependencies: ['tslint', '@geekhive/tslint-config-standard'],
                scripts: {
                    'ts:lint': 'tslint --project ./'
                }
            },
            mainScript: 'ts:lint',
            templates: ['../templates/lint/ts']
        })
    ]
};
exports.scss = {
    name: 'SCSS',
    keywords: ['scss', '.scss'],
    description: '',
    rules: [
        createPrettierRule({
            name: 'SCSS',
            packageChanges: {
                devDependencies: ['prettier'],
                scripts: {
                    'scss:format': 'prettier --write src/**/*.scss'
                }
            },
            mainScript: 'scss:format'
        }),
        createLintRule({
            name: 'Stylelint',
            description: 'Stylelint lint rule for SCSS',
            packageChanges: {
                devDependencies: ['stylelint', '@geekhive/stylelint-config-standard'],
                scripts: {
                    'scss:lint': 'stylelint src/**/*.scss'
                }
            },
            mainScript: 'scss:lint',
            templates: ['../templates/lint/scss']
        })
    ]
};
exports.standards = [exports.javaScript, exports.typeScript, exports.scss];
