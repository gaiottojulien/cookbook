import Cookbook from '../models/cookbook.js';

export const listCookbooks = async (req, res) => {
	try {
		const cookbooks = await Cookbook.find();
		res.status(200).json(cookbooks);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createCookbook = async (req, res) => {
	const cookbookToCreate = new Cookbook(req.body);

	try {
		await cookbookToCreate.save();
		res.status(201).json(cookbookToCreate);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
