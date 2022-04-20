/**
 * IMPORT
 */
const propertiesReader = require('properties-reader')

/**
 * FUNCTION
 */
const properties = propertiesReader('./properties/appliacation-local.properties')// read properties file

module.exports = {
  /**
   * Server Connection Info
   * @returns return server port of string type
   */
  getPort () {
    return properties.get('server.port').toString()
  },

  /**
   * @returns return session secret of string type
   */
  getSessionSecret () {
    return properties.get('server.session.secret').toString()
  },

  /**
   * @returns return database info of string type
   */
  getDataBase () {
    return properties.get('db.database').toString()
  },

  /**
   * @returns db connection limit info of integer type
   */
  getDbConnectionLimit () {
    return parseInt(properties.get('db.connection.limit'))
  },

  /**
   * @returns return db host info of string type
   */
  getDbHost () {
    return properties.get('db.host').toString()
  },

  /**
   * @returns return db user info of string type
   */
  getDbUser () {
    return properties.get('db.user').toString()
  },

  /**
   * @returns return db password info of string type
   */
  getDbPassword () {
    return properties.get('db.password').toString()
  }
}