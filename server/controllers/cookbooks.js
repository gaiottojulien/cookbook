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

export const findCookbookById = async (req, res) => {
	try {
		const cookbookFound = await Cookbook.findById(req.query.id);
		res.status(200).json(cookbookFound);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const updateCookbook = async (req, res) => {
	const cookbookToUpdate = new Cookbook(req.body);
	cookbookToUpdate._id = req.query.id;

	try {
		await cookbookToUpdate.update();
		res.status(200).json(cookbookToUpdate);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const deleteCookbook = async (req, res) => {
	const cookbookToDelete = new Cookbook(req.body);
	cookbookToDelete._id = req.query.id;

	try {
		await cookbookToDelete.delete();
		res.status(200);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
