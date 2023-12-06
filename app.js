import express from 'express';
import "dotenv/config";
import session from "express-session";
import cors from "cors";
import mongoose from 'mongoose';
import UserRoutes from './users/routes.js';
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb+srv://sahithic:newpassword@tickets.ii8raxu.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING);
const app = express();
app.listen(process.env.PORT || 4000);
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
    })
);
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);