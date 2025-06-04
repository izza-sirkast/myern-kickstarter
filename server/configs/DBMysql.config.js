const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const db = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
}).promise();

const createDatabase = () => {
    const createDatabasesQuery = [
        {
            name: 'users',
            query: `
                CREATE TABLE IF NOT EXISTS users (
                    id_user INT PRIMARY KEY AUTO_INCREMENT,
                    username VARCHAR(50) NOT NULL UNIQUE,
                    hashed_password VARCHAR(255) NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
                )
            `
        }
    ]

    createDatabasesQuery.forEach(async (table) => {
        try {
            await db.query(table.query)
            console.log(`Table ${table.name} ready`)
        } catch (error) {
            console.log(error)
        }
    })
}

createDatabase();

module.exports = db;