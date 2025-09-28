import jwt from 'jsonwebtoken';
import { AuthenticationError } from '../core/ApiError.js';

const JWT_SECRET = "FD86118B3687B5773B193B215274F";

export const isLoggedIn = (req, res, next) => {
    const token = req.headers?.authorization?.replace('Bearer ', "");
    try {
        const {userId} = jwt.verify(token, JWT_SECRET);
        req.userId = userId;
        return next()
    }
    catch (err) {
         return next(new AuthenticationError('Please login to continue'));
    }
}