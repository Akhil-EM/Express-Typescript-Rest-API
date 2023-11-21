import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const connectionString = process.env.MONGO_DB_URI || "";
/**
 * create mongo db database connection.
 */
async function createConnection() {
  try {
    await mongoose.connect(connectionString, {});
    console.log("mongodb connection success.!!!");
  } catch (error) {
    console.log("mongodb connection error :", (error as Error).message);
  }
}

/**
 * close mongo db connection
 */
async function closeConnection() {
  await mongoose.connection.close();
  console.log("mongo db connection closed successfully");
}

/**
 * start mongodb transaction
 * @returns {session}
 */
async function startTransaction() {
  const session = await mongoose.startSession();
  session.startTransaction();
  return session;
}
/**
 * end mongo db transaction
 * @param {Session} session 
 */
async function endTransaction(session: any) {
  await session.commitTransaction();
  session.endSession();
}

/**
 * abort mongo db transaction
 * @param {Session} session 
 */
async function abortTransaction(session: any) {
  await session.abortTransaction();
  session.endSession();
}

export {
  createConnection,
  closeConnection,
  startTransaction,
  endTransaction,
  abortTransaction,
};
