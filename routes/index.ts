import express from 'express';
const router = express.Router();

router.use('/prescription', require('./prescriptionRoute'));

module.exports = router;
