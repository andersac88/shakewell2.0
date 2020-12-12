const Beverages = require('../models/Beverages');

module.exports = (app) => {
	app.get('/api/beverages', async (req, res) => {
		const beverages = await Beverages.find({});
		res.send(beverages);
	});

	app.post('/api/beverages', async (req, res) => {
		const beverages = await Beverages.create(req.body);
		res.send(beverages);
	});
};
