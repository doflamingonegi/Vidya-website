const express = require('express');
const router = express.Router();

const videos = [
  { id: 'A0gn9bqL3g0' },
  { id: 'eOIUrUHGOG0' },
  { id: 'uPxa5JsEm4Q' },
  { id: 'uX5GV5FKbIE' },
  { id: 'RGqidwK7_nM' }
];

router.get('/', (req, res) => {
  res.render('videos', { videos: videos });
});

module.exports = router;
