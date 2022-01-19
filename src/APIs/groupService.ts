import axios from "axios";
import {apiBase} from "./config";
import {Group} from "../layouts/teacher/config";

const request = (token: string) => axios.create({
    baseURL: apiBase,
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export const groupApi = (token: string) => ({
    getAll(){
        return request(token).get('Group/get');
    },
    update(group: Group){
        return request(token).put('Group/update', group);
    },
    create(group: Group){
        return request(token).post('Group/update', group);
    },
    addStudents(groupId: string, userIds: string[]){
        return request(token).post('Group/addrange', {groupId: groupId, usersIds: userIds});
    }
})

