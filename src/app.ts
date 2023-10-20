import * as dotenv from "dotenv";
dotenv.config();
import logger from "morgan";
import cors from "cors";
import express from "express";
import mainController from "./controllers";
import * as mongoDB from "./db/mongodb";
const app = express();

//middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(cors());

//connect to database
mongoDB.createConnection();



//controllers
app.use("/", mainController);




app.on("close", async () => {
    //close db connections
    await mongoDB.closeConnection();
});

export default app;