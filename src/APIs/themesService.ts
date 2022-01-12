import axios from "axios";
import {apiBase} from "./config";
import {SubjectTheme} from "../layouts/teacher/config";

const request = (token: string) => axios.create({
    baseURL: apiBase,
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const themeApi = (token: string) =>
    ({
        create(theme: SubjectTheme)
        {
            return request(token).post('Theme/create', theme);
        },

        getAll(subjectId: string)
        {
            return request(token).get(`Theme/get/all/subject/${subjectId}`);
        },

        update(theme: SubjectTheme)
        {
            return request(token).put('Theme/update', theme);
        },
    })