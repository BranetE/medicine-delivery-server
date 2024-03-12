import express from "express";
import http from "http";
import bodyParser from "body-parser";
// import cookieParser from "coolie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression);
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server running on http://localhost:8080/");
});

const MONGO_URL =
  "mongodb+srv://test-user:HmM443hbdFPrjZjS@cluster0.gku4vvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));
