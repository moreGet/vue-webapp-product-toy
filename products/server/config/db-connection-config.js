/**
 * IMPORT
 */
const prop = require('../properties/properties')

const dbInfo = {
  database: prop.getDataBase(),
  connectionLimit: prop.getDbConnectionLimit(),
  host: prop.getDbHost(),
  user: prop.getDbUser(),
  password: prop.getDbPassword()
}

const dbPool = require('mysql').createPool(dbInfo)

module.exports = {
  /**
   * @returns return database connection pool
   */
  getDbPool () {
    return dbPool
  }
}