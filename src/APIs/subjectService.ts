import React from "react";
import axios from "axios";
import {apiBase} from "./config";
import {Subject} from "../layouts/teacher/config";

const response = (token: string) => axios.create({
    baseURL: apiBase,
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const subjectApi = (token: string) =>
    ({
        create(subject: Subject)
        {
            return response(token).post('Subject/create', subject);
        },

        getById(subjectId: string)
        {
            return response(token).get(`Subject/${subjectId}`);
        },

        getAll()
        {
            return response(token).get('Subject');
        },

        update(subject: Subject)
        {
            return response(token).put('Subject/update', subject);
        },
    })