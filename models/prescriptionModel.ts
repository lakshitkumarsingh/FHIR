import mongoose from 'mongoose';
const schema = mongoose.Schema;

let prescription = new schema({
  patient: {
    nhi: { type: String, required: true, trim: true, unique: true },
    name: { type: String, required: true, trim: true },
  },
  date: { type: Date, required: true, default: Date.now },
  medications: [
    {
      id: { type: String, required: true, trim: true },
      dosage: { type: String, required: true, trim: true },
    },
  ],
});

const prescriptionDetails = mongoose.model('prescription', prescription);
export default prescriptionDetails;
