const express = require("express");
const { getUsers, createUser, updateUser, deleteUser } = require("../controllers/UserController");
// const { getAllUsers, getByUsername, register, login, logout, getProfile } = require("../controllers/UserController.js");


// Midleware
// const validateAuth = require("../middlewares/ValidateAuth.js");

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.put("/", updateUser);

router.delete("/", deleteUser);

// Auth
// router.post("/register", register);
// router.post("/login", login);
// router.post("/logout", logout);
// router.get("/profile", getProfile);

module.exports = router;