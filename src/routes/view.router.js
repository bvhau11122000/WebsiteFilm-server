import express from "express";
import { body } from "express-validator";
import tokenMiddleware from "../middlewares/token.middleware.js";
import viewController from "../controllers/view.controller.js";
import requestHandler from "../handlers/request.handler.js";


const router = express.Router({ mergeParams: true });

router.post(
    "/view",
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
    viewController.addView
  );

router.get(
  "/all",
  tokenMiddleware.auth,
  viewController.getAll
);

router.delete(
    "/:viewId",
    tokenMiddleware.auth,
    viewController.removeView,
  );

export default router;