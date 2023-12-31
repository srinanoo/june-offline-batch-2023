const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = "TraineesDB";
let db = "";

async function dbconnection() {
    await client.connect();
    console.log("DB connection established...");
    db = client.db(dbName);
    return db;
}

async function getDB() {
    return db;
}

module.exports = { dbconnection, getDB };