import express from "express";
import tokenMiddleware from "../middlewares/token.middleware.js";
import favoriteController from "../controllers/favorite.controller.js";

const router = express.Router({ mergeParams: true });


router.get(
  "/all",
  tokenMiddleware.auth,
 favoriteController.getAll
);

export default router;