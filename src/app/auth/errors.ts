import {AppError} from "../../common/error/AppError.ts";

export const UserAlreadyExistsError = new AppError('User Already Exists with same email or phone', 400);

export const CannotSignupAsSystemAdmin = new AppError('You cannot register as a system admin', 403);

export const IncorrectCredentials = new AppError('Invalid email or password', 401);

export const InvalidOTPError = new AppError('Invalid OTP', 401);
