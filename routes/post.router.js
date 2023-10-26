import express from "express";
import * as postController from "../controllers/posts.controller.js";
import {authMiddleware} from "../middleware/auth.middleware.js";

export const postRouter = express.Router();

postRouter.get('/', authMiddleware, postController.getPosts);