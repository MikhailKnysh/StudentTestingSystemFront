import axios from "axios";
import { apiBase } from "./config";

const request = () =>
    axios.create({
        baseURL: apiBase
    });

export const sessionApi = () => ({
  login(email: string, password: string){
      return request().post('Session/session/create', {email, password});
  }
})