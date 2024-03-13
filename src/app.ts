import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router/router";
import "dotenv/config";

const app = express();

app.use(cors());

app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:/${process.env.PORT}`);
});

// const MONGO_URL =
//   // "mongodb+srv://test-user:HmM443hbdFPrjZjS@cluster0.gku4vvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
//   "mongodb://localhost:27017/medicine-delivery";

mongoose.Promise;
mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
