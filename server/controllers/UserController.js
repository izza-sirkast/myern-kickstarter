const db = require("../configs/DBMysql.config.js");
require('dotenv').config();

const getUsers = async (req, res) => {
    try {
        const [users] = await db.query('SELECT * FROM users');
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({msg:"Internal server errors"});
    }
}

const createUser = async (req, res) => {
    const {username, password} = req.body;

    try {
        const createRes = await db.query(`
            INSERT INTO users (username, hashed_password) 
            VALUES (?, ?)`, 
            [username, password]);
        console.log(createRes);
        return res.status(201).json({msg:"User created successfully"})
    } catch (error) {
        return res.status(500).json({msg:"Internal server errors", error});
    }
}

const updateUser = async (req, res) => {
    const {id_user, username, password} = req.body;

    try {
        const updateRes = await db.query(`
            UPDATE users 
            SET username = ?, hashed_password = ? 
            WHERE id_user = ?`, 
            [username, password, id_user]);
        console.log(updateRes);
        return res.status(200).json({msg:"User updated successfully"})
    } catch (error) {
        return res.status(500).json({msg:"Internal server errors", error});
    }
}

const deleteUser = async (req, res) => {
    const {id_user} = req.body;

    try {
        const deleteRes = await db.query(`
            DELETE FROM users 
            WHERE id_user = ?`, 
            [id_user]);
        console.log(deleteRes);
        return res.status(200).json({msg:"User deleted successfully"})
    } catch (error) {
        return res.status(500).json({msg:"Internal server errors", error});
    }
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
}
