/**
 * IMPORT
 */
const propertiesReader = require('properties-reader')

/**
 * FUNCTION
 */
const properties = propertiesReader('./properties/appliacation-local.properties')// read properties file

module.exports = {
    getPort () {
        return properties.get('server.port')
    }
}