const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.render("home"));
router.get("/recently-added", (req, res) => res.render("home"));
router.get("/home", (req, res) => res.render("home"));
router.get("/artists", (req, res) => res.render("artists"));
router.get("/albums", (req, res) => res.render("albums"));
router.get("/genres", (req, res) => res.render("genre"));
router.get("/downloaded", (req, res) => res.render("downloaded"));
router.get("/songs", (req, res) => res.render("songs"));

module.exports = router;
