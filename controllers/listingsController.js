const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Listing
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    
  },
  findById: function(req, res) {
    db.Listing
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log( req.file)
    req.body.filename = req.file.filename
    db.Listing
      .create(req.body)
      .then(dbModel => {
        console.log(dbModel,'<===')
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
    //res.sendStatus(200)
  },
  update: function(req, res) {
    db.Listing
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Listing
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};