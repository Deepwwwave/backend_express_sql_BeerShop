import {fileURLToPath} from 'url';
import path from "path";
import 'dotenv/config';
import express from 'express';
import router from "./routes/index.js";
// import session from "express-session";
import cors from 'cors';
import fileUpload from 'express-fileupload';
// import { mySession } from "./config/session.js";
// import sessionByDefault from "./config/session.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

const PORT = process.env.PORT || process.env.SERVER_LOCAL_PORT;

app.use(cors());
app.use(fileUpload());

app.use('/public/images', express.static(__dirname + '/public/images/'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(session(mySession));
// app.use(sessionByDefault);

app.use(router);

app.listen(PORT, () => {
    console.log(`Listening a http://localhost:${PORT}`);
 });


