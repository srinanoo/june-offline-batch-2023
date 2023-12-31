const traineesControllers = require('../controllers/traineeControllers');
const router = require('express').Router();

// /readTrainees
router.get("/readTrainees", traineesControllers.readTrainees);

// /readSpecificTrainee
router.get("/readSpecificTrainee", traineesControllers.readSpecificTrainee);

// /createTrainee
router.post("/createTrainee", traineesControllers.createTrainee);

// /updateTrainee
router.put("/updateTrainee", traineesControllers.updateTrainee);

// /deleteTrainee
router.delete("/deleteTrainee", traineesControllers.deleteTrainee);

module.exports = router;