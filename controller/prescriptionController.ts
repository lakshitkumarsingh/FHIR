import { RequestHandler } from 'express';
import PrescriptionDb from '../models/prescriptionModel';
import { getData, saveData, updateData } from '../externalAPIs/governmentAPI';

export const savePrescription: RequestHandler = async (req, res) => {
  try {
    const prescriptionDTO = req.body;
    const prescriptionDetails = await PrescriptionDb.create(prescriptionDTO);
    await saveData(prescriptionDTO);
    res.status(200).json({ data: prescriptionDetails, message: 'Prescription Added Successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Request Failed', eroor: err });
  }
};

export const getPrescription: RequestHandler = async (req, res) => {
  try {
    const { nhi } = req.params;
    const prescriptionDetails = await PrescriptionDb.findOne({ nhi: nhi });
    await getData(nhi);
    res.status(200).json({ data: prescriptionDetails, message: 'Fetched Prescription Details Successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Request Failed', eroor: err });
  }
};

export const editPrescription: RequestHandler = async (req, res) => {
  try {
    const prescriptionDTO = req.body;
    const prescriptionDetails = await PrescriptionDb.findOneAndUpdate(
      { nhi: prescriptionDTO.nhi },
      { $push: { id: prescriptionDTO.id, dosage: prescriptionDTO.dosage } }
    );
    await updateData(prescriptionDTO);
    res.status(200).json({ data: prescriptionDetails, message: 'Prescription edited successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Request Failed', eroor: err });
  }
};
