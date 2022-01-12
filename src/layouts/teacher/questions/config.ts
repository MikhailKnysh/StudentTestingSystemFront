import {Answer, Question} from "../config";
import {v4 as uuidv4} from 'uuid';

export const questionsSteps = ["Question", "Answers", "Review"];

export type questionDifficulty = {
    key: string,
    value: number
}

export enum questionType {
    Single = 'Single answer',
    Multiple = 'Multiple answers'
}

export const questionTypeList: questionType[] = [
    questionType.Single,
    questionType.Multiple
]

export const questionDifficultyList: questionDifficulty[] = [
    {key: 'Easy', value: 1},
    {key: 'Normal', value: 2},
    {key: 'Hard', value: 3},
    {key: 'Extreme', value: 4}
]

export const questionInitialState: Question = {
    id: uuidv4(),
    answers: [],
    difficulty: 2,
    questionBody: '',
    idTeacher: '',
    idTheme: '',
    imageLink: '',
    isDisabled: false,
    linkForHelp: '',
    timeLimitDate: new Date(50000),
    timeLimit: 10,
    title: '',
    type: questionType.Single
}

export const answerInitialState: Answer = {
    id: uuidv4(),
    isCorrect: false,
    body: ''
}

