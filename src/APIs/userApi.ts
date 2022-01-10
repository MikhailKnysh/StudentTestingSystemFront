import axios from "axios";
import {apiBase} from "./config";
import {ChangedPassword, User} from "../layouts/teacher/config";

const response = (token: string) => axios.create({
    baseURL: apiBase,
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const userApi = (token: string) =>
    ({
        update(user: User)
        {
            return response(token).put('User/update', user);
        },

        changePassword(changedPassword: ChangedPassword)
        {
            return response(token).put('User/change/password', changedPassword);
        },
    })