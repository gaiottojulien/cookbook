import { MongoClient } from "mongodb";
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

var _db;

export function connectToServer(callback) {
	client.connect(function (err, db) {
		_db = db.db("myFirstDatabase");
		return callback(err);
		console.log("Successfully connected to MongoDB.");
	});
}

export function getDb() {
	return _db;
}
