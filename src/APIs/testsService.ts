import axios from "axios";
import {apiBase} from "./config";

const request = (token: string) => axios.create({
    baseURL: apiBase,
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const testsApi = (token: string) =>
    ({
        getResult(userId: string, themeId: string)
        {
            return request(token).post(`Test/get/result/${userId}/${themeId}`);
        },

        getById(testId: string)
        {
            return request(token).get(`Test/get/${testId}`);
        },

        getAllForStudent(userid: string)
        {
            return request(token).get(`Test/get/all/student/${userid}`);
        },
    })