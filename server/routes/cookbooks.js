import express from "express";
const cookbookRoutes = express.Router();

import { listCookbooks, createCookbook, findCookbookById } from '../controllers/cookbooks.js';

cookbookRoutes.get('/', listCookbooks);
cookbookRoutes.get('/:id', findCookbookById);
cookbookRoutes.post('/', createCookbook);

/*
// Update a cookbook by id.
cookbookRoutes.route("/update/:id").post((req, res) => {
	let db_connect = getDb("cookbook-app");
	let query = { id: req.body.id };
	let cookbookToUpdate = {
		$set: {
			cookbook_name: req.body.cookbook_name,
			cookbook_description: req.body.cookbook_description
		},
	};

	db_connect
		.collection("cookbooks")
		.updateOne(
			query,
			cookbookToUpdate,
			(err, res) => {
				if (err) {
					throw err;
				}
				console.log("1 document updated");
			}
		);
});

// Delete a cookbook by id
cookbookRoutes.route("/delete/:id").delete((req, res) => {
	let db_connect = getDb("cookbook-app");
	var query = { id: req.body.id };
	db_connect
		.collection("cookbooks")
		.deleteOne(
			query,
			(err, obj) => {
				if (err) {
					throw err;
				}
				console.log("1 document deleted");
			}
		);
});
*/
export default cookbookRoutes;
