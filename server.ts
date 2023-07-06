import express from 'express';
const dbconn = require('./dbConnection/mongodb');
import bodyParser from 'body-parser';
import cors from 'cors';

const app: express.Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const port: number = 3000;

app.use(require('./routes'));

app.listen(port, () => {
  console.log(`TypeScript with Express
         http://localhost:${port}/`);
});
