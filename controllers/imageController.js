const path = require('path');
const db = require("../models");
const crypto = require('crypto');
const GridFsStorage = require('multer-gridfs-storage');
const connectionInfo = require('../server.js')
console.log(connectionInfo)
const mongoURI = connectionInfo.MONGO
const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });

  const controller ={
    findAll: function(req, res) {
      db.File
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      
    },
  }


  module.exports = {storage, controller}