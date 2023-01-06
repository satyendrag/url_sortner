const express = require("express");
const { hashUrl, getHashUrl } = require("../controllers/url.controller");
const app = express();

const router = express.Router();
router.post("/hashUrl", hashUrl);
router.get("/:hashUrl", getHashUrl);

export default router;
