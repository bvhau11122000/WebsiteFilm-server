import express from "express";
import userRoute from "./user.route.js";
import mediaRoute from "./media.route.js";
import personRoute from "./person.route.js";
import reviewRoute from "./review.route.js";
import favoriteRouter from "./favorite.router.js"
import filmsRouter from "./films.router.js";
import viewRouter from "./view.router.js"






const router = express.Router();

router.use("/user", userRoute);
router.use("/films",filmsRouter)
router.use("/person", personRoute);
router.use("/reviews", reviewRoute);
router.use("/favorite", favoriteRouter);
router.use("/views",viewRouter)
router.use("/:mediaType", mediaRoute);



export default router;
