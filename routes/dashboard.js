const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if (!req.session.userId) {
    res.redirect('/auth/login');
  } else {
    res.render('dashboard');
  }
});

module.exports = router;
