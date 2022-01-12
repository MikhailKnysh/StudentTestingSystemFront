import axios from "axios";
import {apiBase} from "./config";
import {Subject} from "../layouts/teacher/config";

const request = (token: string) => axios.create({
    baseURL: apiBase,
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const subjectApi = (token: string) =>
    ({
        create(subject: Subject)
        {
            return request(token).post('Subject/create', subject);
        },

        getById(subjectId: string)
        {
            return request(token).get(`Subject/${subjectId}`);
        },

        getAll()
        {
            return request(token).get('Subject');
        },

        update(subject: Subject)
        {
            return request(token).put('Subject/update', subject);
        },
    })