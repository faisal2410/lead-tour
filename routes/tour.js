const express = require('express');
const router = express.Router();
const {getAllTours,getTour,createTour,updateTour,deleteTour,getTourStats,getMonthlyPlan,} = require('../controllers/tour');

const {aliasTopTours}= require('../middlewares/tour')


router.get("/top-5-cheap",aliasTopTours, getAllTours);

router.get("/tour-stats",getTourStats);
router.get("/monthly-plan/:year",getMonthlyPlan)

router.get("/",getAllTours);
router.post("/",createTour)

router.get("/:id",getTour);  
router.patch("/:id",updateTour)
router.delete("/:id",deleteTour)


module.exports = router;
