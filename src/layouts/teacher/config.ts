export type Subject = {
    id: string,
    title: string
}

export type SubjectTheme = {
    id: string,
    title: string
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
    timeLimit: number,
    type: string,
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
    answer: Answer,
    answerDuration: number
}

export type StudentsTest = {
    idUser: string,
    firstName: string,
    lastName: string,
    email: string,
    userRole: UserRole
}

export enum UserRole {
    guest = "guest",
    student = "student",
    teacher = "teacher"
}

