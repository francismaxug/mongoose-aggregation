import express from "express";
import {
  createTour,
  deleteTour,
  getAllTours,
  getSingleTour,
  updateTour,
  getTourStats,
} from "../../controllers/tourController.js";
import alliasTopTours from "../../middleware/alliasTopTours.js";

const router = express.Router();

router.post("/newTour", createTour);
router.get("/all-tours", getAllTours);
router.get("/get-top-tours", alliasTopTours, getAllTours);
router.get("/tour-stats", getTourStats);

router
  .route("/tour/:id")
  .get(getSingleTour)
  .patch(updateTour)
  .delete(deleteTour);
router.get("/tour/:id", getSingleTour);

export default router;
