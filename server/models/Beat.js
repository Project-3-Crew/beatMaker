const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const beatSchema = new Schema({

    beatText: {
      type: String,
      required: 'You need to leave a beat!',
      minlength: 1,
      maxlength: 280,
      trim: true,
    },
    beatAuthor: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    comments: [
      {
        commentText: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 280,
        },
        commentAuthor: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: (timestamp) => dateFormat(timestamp),
        },
      },
    ],
  });
  
  const Beat = model('Beat', beatSchema);
  
  module.exports = Beat;
  