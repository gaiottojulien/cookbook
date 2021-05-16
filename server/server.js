import { config } from 'dotenv';
import express from "express";
import json from "express";
import cors from "cors";
import mongoose from 'mongoose';
import cookbookRoutes from './routes/cookbooks.js';

config({ path: "./config.env" });

const app = express();

app.use('/cookbooks', cookbookRoutes);

app.use(json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const ATLAS_URI = process.env.ATLAS_URI;

mongoose.connect(ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
	.catch(() => console.log(error.message));

mongoose.set('useFindAndModify', false);
