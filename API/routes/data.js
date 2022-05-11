const express = require('express');

const scoreController = require('../controllers/scoreController');

const router = express.Router();

router.get('/obtenir-score', scoreController.obtenirScores);

router.post('/inserer-score', scoreController.creerScore);

module.exports = router;