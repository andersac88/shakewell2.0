const mongoose = require('mongoose');
const { Schema } = mongoose;

const beverageSchema = new Schema({
	barcode: String,
	shake: Boolean,
});

const Beverages = mongoose.model('beverages', beverageSchema);

module.exports = Beverages;
