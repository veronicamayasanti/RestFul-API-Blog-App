import bcrypt from 'bcrypt';
import {prisma} from '../../application/database.js'
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // check if email already exists
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: { email, password: hashedPassword },

        });
        res.status(201).json({ message: 'User registered successfully', email: user.email });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password} = req.body;
        // check if email already exists
        const user = await prisma.user.findUnique({ where: { email}});
        if (!user) return res.status(400).json({ message: 'Invalid email or password' });

        // check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "invalid email or password"})

        const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'});
        res.status(200).json({message: 'Login successful', token});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}