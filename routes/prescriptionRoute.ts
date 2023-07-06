import express from 'express';
import { editPrescription, getPrescription, savePrescription } from '../controller/prescriptionController';
const route = express.Router();

route.post('/save', savePrescription);
route.get('/details:/nhi', getPrescription);
route.post('/edit', editPrescription);

module.exports = route;
