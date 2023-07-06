import mongoose from 'mongoose';
import dotenv from 'dotenv';
const envFound = dotenv.config();
if (!envFound) {
  throw new Error("Couldn't find .env file");
}
const DB_URL = `mongodb+srv://${process.env.MONGOOSE_URI_USERNAME}:${process.env.MONGOOSE_URI_PASSWORD}@${process.env.MONGO_URI}/?retryWrites=true`;
mongoose.connection.openUri(DB_URL);
mongoose.connection.on('connected', () => {
  console.log('Mongodb Connected Successfully');
});
mongoose.connection.on('error', (err: any) => {
  console.log('error', 'Mongoose default connection error: ' + err);
});
mongoose.connection.on('disconnected', () => {
  console.log('warning', 'Mongoose default connection disconnected');
});
