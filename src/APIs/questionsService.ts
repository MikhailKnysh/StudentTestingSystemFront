import axios from "axios";
import {apiBase} from "./config";
import {AvailableTest, Question, StudentAnswer} from "../layouts/teacher/config";
import {v4 as uuidv4} from "uuid";

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
    getNext(studentId: string, themeId: string){
        return request(token).post(`Question/get/next/${studentId}/${themeId}` );
    },
    getInitQuestion(availableTest: AvailableTest){
        return request(token).post('Question/init/test', availableTest);
    },
    studentAnswerCreate(studentAnswer: StudentAnswer){
        return request(token).post('StudentAnswer/create', studentAnswer)
    }
})