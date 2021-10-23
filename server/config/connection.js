const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://kingami34:Mastery28@cluster0.dlyyn.mongodb.net/myFirstDatabase?retryWrites=true";

mongoose.connect(mongoURI, {
useNewUrlParser: true,
useUnifiedTopology: true,
});

module.exports = mongoose.connection;
