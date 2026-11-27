import {AppError} from "../../common/error/AppError.ts";

export const NotAuthenticated = new AppError('User not authenticated', 403);