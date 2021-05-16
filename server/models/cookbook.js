import mongoose from 'mongoose';

const cookbookSchema = mongoose.Schema({
	name: String,
	description: String
});

const Cookbook = mongoose.model('Cookbook', cookbookSchema);

export default Cookbook;
