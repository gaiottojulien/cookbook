const express = require("express");
const cookbookRoutes = express.Router();
const dbo = require("../db/conn");

// List all the cookbooks.
cookbookRoutes.route("/cookbooks").get((req, res) => {
	let db_connect = dbo.getDb("cookbook-app");
	db_connect
		.collection("cookbooks")
		.find({})
		.toArray((err, result) => {
			if (err) {
				throw err;
			}
			res.json(result);
		});
});

// Find a cookbook by id.
cookbookRoutes.route("/cookbooks/:id").get((req, res) => {
	let db_connect = dbo.getDb("cookbook-app");
	db_connect
		.collection("cookbooks")
		.find({ id: req.body.id })
		.toArray((err, result) => {
			if (err) {
				throw err;
			}
			res.json(result);
		});
});

// Create a new cookbook.
cookbookRoutes.route("/cookbooks/add").post((req, res) => {
	let db_connect = dbo.getDb("cookbook-app");
	let cookbookToCreate = {
		cookbook_name: req.body.cookbook_name,
		cookbook_description: req.body.cookbook_description
	};

	db_connect
		.collection("cookbooks")
		.insertOne(
			cookbookToCreate,
			(err, res) => {
				if (err) throw err;
			}
		);
});

// Update a cookbook by id.
cookbookRoutes.route("/cookbooks/update/:id").post((req, res) => {
	let db_connect = dbo.getDb("cookbook-app");
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
cookbookRoutes.route("/cookbooks/delete/:id").delete((req, res) => {
	let db_connect = dbo.getDb("cookbook-app");
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

module.exports = cookbookRoutes;
