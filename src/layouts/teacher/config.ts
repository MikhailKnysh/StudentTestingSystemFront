import {questionType} from "./questions/config";

export type Subject = {
    id: string,
    title: string
}

export type SubjectTheme = {
    id: string,
    subjectId: string,
    title: string
    countQuestions: number
}

export type Question = {
    id: string,
    idTeacher: string,
    idTheme: string,
    title: string,
    questionBody: string,
    imageLink: string,
    isDisabled: boolean,
    linkForHelp: string,
    difficulty: number,
    timeLimit: Date,
    type: questionType,
    answers: Answer[]
}

export type Answer = {
    id: string,
    body: string,
    isCorrect: boolean
}

export type StudentAnswer = {
    idTest: string,
    question: Question,
    answer: Answer[],
    answerDuration: number
}

export type StudentsTest = {
    id: string,
    idUser: string,
    idTheme: string,
    title: string,
    dateTimeStart: number,
    dateTimeFinish: number,
    mark: number,
    timePreparation: number,
    countOfHelpChecks: number
}

export type Group = {
    id: string,
    title: string,
    users: User[]
}

export interface User {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    role: UserRole,
    token: string,
    expires: number
}

export type ChangedPassword = {
    "email": string,
    "oldPassword": string,
    "newPassword": string,
    "confirmPassword": string
}

export enum UserRole {
    guest = "Guest",
    student = "Student",
    teacher = "Teacher",
    admin = "Admin"
}

export type AvailableTest = {
    theme: SubjectTheme,
    studentId: string
}

export const DateTime1970 = new Date(1970, 0 , 1)


export const userInitialState: User = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    role: UserRole.guest,
    token: "",
    expires: 0
}