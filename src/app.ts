import * as dotenv from "dotenv";
dotenv.config();
import logger from "morgan";
import cors from "cors";
import express from "express";
import swaggerUi from "swagger-ui-express";
import mainController from "./controllers";
import * as mongoDB from "./db/mongodb";
import * as  swaggerDocument  from "./swagger/swagger.json";
const app = express();

//middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument)); //swagger docs

//connect to database

mongoDB.createConnection();

//controllers
app.use("/", mainController);

app.on("close", async () => {
  //close db connections
  await mongoDB.closeConnection();
});

export default app;
