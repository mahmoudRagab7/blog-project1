const express = require("express");
import { register } from "../controllers/auth.control";
const router = express.Router();

router.post("/register", register);
// router.post("/login");

module.exports = router;
