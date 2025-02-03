import express from 'express';
import { registerUser } from './usersController.js';
import { registerValidation } from './usersValidation.js';

const userRouter = express.Router();

userRouter.post('/api/users/register', registerValidation, registerUser); // Use the validation middleware here

export default userRouter;