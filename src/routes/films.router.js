import express from "express";
import { body } from "express-validator";
import tokenMiddleware from "../middlewares/token.middleware.js";
import filmController from "../controllers/film.controller.js";
import requestHandler from "../handlers/request.handler.js";

const router = express.Router({ mergeParams: true });

router.post(
    "/",
    tokenMiddleware.auth,
    body("mediaType")
      .exists().withMessage("mediaType is required")
      .custom(type => ["movie", "tv"].includes(type)).withMessage("mediaType invalid"),
    body("mediaId")
      .exists().withMessage("mediaId is required")
      .isLength({ min: 1 }).withMessage("mediaId can not be empty"),
    body("mediaTitle")
      .exists().withMessage("mediaTitle is required"),
    body("mediaPoster")
      .exists().withMessage("mediaPoster is required"),
    body("mediaRate")
      .exists().withMessage("mediaRate is required"),
    requestHandler.validate,
    filmController.create
  );
router.get(
  "/all",
  tokenMiddleware.auth,
 filmController.getAll
);
router.delete(
  "/:filmId",
  tokenMiddleware.auth,
  filmController.removeFilm
);

export default router;