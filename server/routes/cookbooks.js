import express from "express";
const cookbookRoutes = express.Router();

import { listCookbooks, createCookbook, findCookbookById, updateCookbook } from '../controllers/cookbooks.js';

cookbookRoutes.get('/', listCookbooks);
cookbookRoutes.get('/:id', findCookbookById);
cookbookRoutes.post('/', createCookbook);
cookbookRoutes.post('/:id', updateCookbook);

/*

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
