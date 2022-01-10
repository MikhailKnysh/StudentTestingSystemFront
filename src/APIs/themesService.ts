import axios from "axios";
import {apiBase} from "./config";
import {SubjectTheme} from "../layouts/teacher/config";

const response = (token: string) => axios.create({
    baseURL: apiBase,
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const themeApi = (token: string) =>
    ({
        create(theme: SubjectTheme)
        {
            return response(token).post('Theme/create', theme);
        },

        getById(themeId: string)
        {
            return response(token).get(`Theme/${themeId}`);
        },

        getAll(subjectId: string)
        {
            return response(token).get(`Theme/${subjectId}`);
        },

        update(theme: SubjectTheme)
        {
            return response(token).put('Theme/update', theme);
        },
    })