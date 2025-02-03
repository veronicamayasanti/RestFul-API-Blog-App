import express from 'express';
import dotenv from 'dotenv';
import userRouter from '../API/users/userRoutes.js';
dotenv.config();

export const web = express()
web.use(express.json());
web.use('/', userRouter); 