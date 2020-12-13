const mongoose = require('mongoose');
const { Schema } = mongoose;

const beverageSchema = new Schema({
	barcode: String,
	name: String,
	shake: Boolean,
});

const Beverages = mongoose.model('beverages', beverageSchema);

module.exports = Beverages;
