"use strict";

const Score = require('../models/score');

exports.obtenirScores = (req, res, next) => {
  Score.find()
    .then(scores => {
      res.status(200).json({
        message: 'Scores fetched successfully.',
        scores: scores
      });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.creerScore = (req, res, next) => {
  Score.find()
    .then(scores => {
      const score = new Score({
        nom_utilisateur: `Utilisateur ${(scores.length + 1)}`,
        nb_papiers: req.body.nb_papiers,
      });

      score.save()
        .then(score => {
          res.status(201).json({
            message: 'Score created successfully!',
            score: score
          });
        })
        .catch(err => {
          if (!err.statusCode) {
            err.statusCode = 500;
          }
          next(err);
        });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};