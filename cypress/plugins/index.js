/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

const fs = require('fs-extra');
const path = require('path');

module.exports = (on, config) => {
  
    function getConfigurationByFile(file) {
        const pathToConfigFile = path.resolve('..', 'TechTest/cypress/configFiles', `${file}.json`);
        return fs.readJson(pathToConfigFile);
    }
    const file = config.env.configFile || 'stage';

    return getConfigurationByFile(file);
};


