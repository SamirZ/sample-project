import { compare, hash } from 'bcryptjs';
import { model, Schema, Document } from 'mongoose';
import validator from 'validator';
import { BCRYPT_WORK_FACTOR } from '../config';

interface UserDocument extends Document {
    email: string;
    name: string;
    password: string;
    matchesPassword: (password: string) => Promise<boolean>;
}

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: [true, 'Please provide your email'],
            unique: true,
            lowercase: true,
            validate: [validator.isEmail, 'Please provide a valid email'],
        },
        name: {
            type: String,
            required: [true, 'Please tell us your name'],
        },
        password: {
            type: String,
            required: [true, 'Please provide your password'],
            minlength: [
                8,
                'Password must have more or equal than 8 characters',
            ],
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre<UserDocument>('save', async function () {
    if (this.isModified('password')) {
        this.password = await hash(this.password, BCRYPT_WORK_FACTOR);
    }
});

userSchema.methods.matchesPassword = function (password: string) {
    return compare(password, this.password);
};

userSchema.set('toJSON', {
    transform: (_: UserDocument, { _id, __v, password, ...rest }: any) => ({ id: _id, ...rest }),
});

export const User = model<UserDocument>('User', userSchema);
