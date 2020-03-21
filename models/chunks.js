const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chunkSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  files_id:{
      type: String,
      required:true
  },
  n:{
      type: Number,
      require: true
  },
  data:{
      type: Buffer
  }
});

const chunk = mongoose.model("uploads.chunks", chunkSchema);

module.exports = chunk;