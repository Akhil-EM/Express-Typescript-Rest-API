"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.abortTransaction = exports.endTransaction = exports.startTransaction = exports.closeConnection = exports.createConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const connectionString = process.env.MONGO_DB_URI || "";
function createConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield mongoose_1.default.connect(connectionString, {});
            console.log("mongodb connection success.!!!");
        }
        catch (error) {
            console.log("mongodb connection error :", error.message);
        }
    });
}
exports.createConnection = createConnection;
function closeConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose_1.default.connection.close();
        console.log("mongo db connection closed successfully");
    });
}
exports.closeConnection = closeConnection;
function startTransaction() {
    return __awaiter(this, void 0, void 0, function* () {
        const session = yield mongoose_1.default.startSession();
        session.startTransaction();
        return session;
    });
}
exports.startTransaction = startTransaction;
function endTransaction(session) {
    return __awaiter(this, void 0, void 0, function* () {
        yield session.commitTransaction();
        session.endSession();
    });
}
exports.endTransaction = endTransaction;
function abortTransaction(session) {
    return __awaiter(this, void 0, void 0, function* () {
        yield session.abortTransaction();
        session.endSession();
    });
}
exports.abortTransaction = abortTransaction;
