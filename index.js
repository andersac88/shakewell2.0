const express = require('express');
const mongoose = require('mongoose');

const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4500;

app.listen(PORT, function () {
	console.log(`API Server now listening on PORT ${PORT}!`);
});
