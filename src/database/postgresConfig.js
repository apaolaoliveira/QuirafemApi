const pg = require("pg");

const DB_NAME= process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_HOST = process.env.DB_HOST;
const DB_PASSWORD = process.env.DB_PASSWORD;

const config = {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: 5432
};

const client = new pg.Client(config);

const res = client.query(`SELECT datname FROM pg_catalog.pg_database WHERE datname = '${DB_NAME}'`);

if (res.rowCount === 0) {
    console.log(`${DB_NAME} database not found, creating it.`);
    client.query(`CREATE DATABASE "${DB_NAME}";`);
    console.log(`created database ${DB_NAME}`);
} else {
    console.log(`${DB_NAME} database exists.`);
}

client.end();


module.exports = client;