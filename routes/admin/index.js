const express = require("express");
const router = express.Router();

// REGISTER : /api/admin/register
router.post("/register", require("./register"));
//LOGIN : /api/admin/login
// router.post("/login", require("./login"));

//ADD vote: /api/admin/addvote
// router.post("/addvote", require("./addvote"));

//UPDATE vote: /api/admin/updatevote/:id
// router.post("/updatevote/:id", require("./updatevote"));

// DELETE vote : /api/admin/deletevote
// router.delete("/deletevote/:id", require("./deletevote"));

//GET vote : /api/admin/vote
// router.get("/votes", require("./getvotes"));

//GET vote : /api/admin/vote/:id
// router.get("/vote/:id", require("./getvote"));

module.exports = router;
