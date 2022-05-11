const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  nom_utilisateur: {
    type: String,
    required: true
  },
  nb_papiers: {
    type: Number,
    required: true
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('ScoreSchema', scoreSchema);