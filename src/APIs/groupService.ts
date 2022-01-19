import axios from "axios";
import {apiBase} from "./config";

const request = (token: string) => axios.create({
    baseURL: apiBase,
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const groupApi = (token: string) =>
    ({
        getAll()
        {
            return request(token).get(`Group/get`);
        },
    })