const path = require('path');
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
//////////////////////////////////////////////////////////////

//mongoose-gridfs////////////////////////////////////////////

const Attachment = createModel({
  modelName: 'uploads',
  connection: connectionInfo.conn
});
const readStream = createReadStream('sample.txt');
const options = ({ filename: 'sample.txt', contentType: 'text/plain' });
Attachment.write(options, readStream, (error, file) => {
  //=> {_id: ..., filename: ..., ...}
});




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