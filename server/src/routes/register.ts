import { Router } from 'express';
import { logIn } from '../auth';
import { BadRequest } from '../errors';
import { catchAsync, guest } from '../middleware';
import { User } from '../models';
import { validate, registerSchema } from '../validation';

const router = Router();
router.post('/register', guest, catchAsync(async (req, res) => {
    await validate(registerSchema, req.body);
    
    const { email, name, password } = req.body;

    const found = User.exists({email});

    if (!found) {
        throw new BadRequest('Invalid email');
    }

    const user = await User.create({
        email,
        name,
        password
    });

    logIn(req, user.id);

    res.json({message: 'OK'});
}));

export { router as register };