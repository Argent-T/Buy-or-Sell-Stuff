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
   
   var  username = req.body.postUser
    db.Listing
      .create(req.body)
      .then(({_id}) => db.User.findOneAndUpdate({username: username}, {$push: {listings: _id}}, {new: true}))
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log(req.body.buyer)
    var buyer = req.body.buyer
    db.Listing
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(({_id}) => db.User.findOneAndUpdate({username: buyer}, {$push: {purchased: _id}}, {new: true}))
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