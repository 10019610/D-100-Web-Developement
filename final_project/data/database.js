const mongodb = require('mongodb');
const { get } = require('../routes/auth.routes');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
	const client = await MongoClient.connect('mongodb://localhost:27017');
	database = client.db('online-shop');
}

function getDb() {
	if (!database) {
		throw new Error('You must connect first!!!');
	}
	return database;
}

module.exports = {
	connectToDatabase: connectToDatabase,
	getDb: getDb
};

// const mysql = require("mysql2/promise");

// const pool = mysql.createPool({
// 	host: "localhost",
// 	database: "final",
// 	user: "root",
// 	password: "1234",
// });

// module.exports = pool;