import express, { json } from "express";
import cors from "cors";
import { connectToServer } from "./db/conn";

require("dotenv").config({ path: "./config.env" });

const app = express();
app.use(cors());
app.use(json());
app.use(require("./routes/record"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
	connectToServer(function (err) {
		if (err) console.error(err);
		console.log(`Successfully connected to MongoDB.`);

	});
	console.log(`Server is running on port: ${port}`);
});
