import express from "express";
const cookbookRoutes = express.Router();

import { listCookbooks, createCookbook, findCookbookById, updateCookbook, deleteCookbook } from '../controllers/cookbooks.js';

cookbookRoutes.get('/', listCookbooks);
cookbookRoutes.get('/:id', findCookbookById);
cookbookRoutes.post('/', createCookbook);
cookbookRoutes.post('/:id', updateCookbook);
cookbookRoutes.delete('/:id', deleteCookbook);

export default cookbookRoutes;
