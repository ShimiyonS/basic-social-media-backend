import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import { dataBaseConnection } from "./db.js";
import AuthRoute from "./Routes/AuthRoute.js"
import UserRoute from "./Routes/UserRoute.js"
import PostRoute from "./Routes/PostRoute.js"

dotenv.config();
dataBaseConnection();
const app = express();

app.use(express.json());

app.use(cors());


const PORT = process.env.PORT;

app.listen(PORT, ()=>console.log(`Server is up and running in localhost:${PORT}`))

app.use("/auth", AuthRoute)
app.use("/user", UserRoute)
app.use("/post", PostRoute)