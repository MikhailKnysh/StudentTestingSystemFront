import axios from "axios";
import {apiBase} from "./config";
import {ChangedPassword, User} from "../layouts/teacher/config";

const request = (token: string) => axios.create({
    baseURL: apiBase,
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const userApi = (token: string) =>
    ({
        update(user: User)
        {
            return request(token).put('User/update', user);
        },

        changePassword(changedPassword: ChangedPassword)
        {
            return request(token).post('User/change/password', changedPassword);
        },
    })