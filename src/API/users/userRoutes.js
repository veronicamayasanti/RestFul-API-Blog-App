import express from 'express';
import { registerUser, loginUser } from './usersController.js';
import { registerValidation, loginValidation } from './usersValidation.js';

const userRouter = express.Router();

userRouter.post('/api/users/register', registerValidation, registerUser); // Use the validation middleware here
userRouter.post('/api/users/login', loginValidation, loginUser)
export default userRouter;