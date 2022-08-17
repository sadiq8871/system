const express = require('express');
const router = express.Router();
const inviteLink = "https://i8.ae/cTvhl";
const supportLink = "https://discord.gg/A38BZdUA4F";

module.exports = function Admin(client) {
  
  router.get('/invite', (req, res) => res.redirect(inviteLink));
  
  router.get('/support', (req, res) => res.redirect(supportLink));
  
  return router;
}