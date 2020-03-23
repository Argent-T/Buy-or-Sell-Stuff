const path = require('path');
var mongoose = require('mongoose');
const {createReadStream} = require('fs');
const { createModel } = require('mongoose-gridfs');
const db = require("../models");
const crypto = require('crypto');
const GridFsStorage = require('multer-gridfs-storage');
const connectionInfo = require('../server.js')
const mongoURI = connectionInfo.MONGO
// Storage//////////////////////////////////////////////////
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          console.log(buf)
          const filename = file.originalname;
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });
//////////////////////////////////////////////////////////////

//mongoose-gridfs////////////////////////////////////////////

mongoose.connection.on('connected', function(){
const bucket = createModel({modelName: "uploads"})
// const readStream = createReadStream()
})


///////////////////////////////////////////////////////////////

// retrieve//////////////////////////////////////////////////////

  const controller ={
    findAll: function(req, res) {
      db.File
        .find(req.query)
        .sort({ date: -1 })


        // .then(dbModel => res.json(dbModel))
        // .catch(err => res.status(422).json(err));
      
    },
  }


  module.exports = {storage, controller}