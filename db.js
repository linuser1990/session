const {Pool} = require('pg')
require('dotenv').config()

const pool = new Pool (
{
    password : process.env.DB_PASS,
    user : process.env.DB_USER,
    port : process.env.DB_PORT,
    database : process.env.DB_DATABASE,
    host : process.env.DB_HOST
})

module.exports = pool