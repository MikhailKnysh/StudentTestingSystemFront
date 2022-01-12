import axios from "axios";
import {apiBase} from "./config";
import {Question, StudentAnswer} from "../layouts/teacher/config";

const request = (token: string) => axios.create({
    baseURL: apiBase,
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const questionsApi = (token: string) => ({
    getAll(themeId: string){
        return request(token).get(`Question/get/all/${themeId}`);
    },
    create(question: Question){
        return request(token).post('Question/create', question);
    },
    update(question: Question){
        return request(token).put('Question/update', question);
    },
    getNext(answer: StudentAnswer){
        return request(token).post('Question/get/next', answer);
    }
})