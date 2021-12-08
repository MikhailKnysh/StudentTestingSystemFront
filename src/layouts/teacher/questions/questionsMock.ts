import {Question} from "../config";
import {questionType} from "./config";

export const questionsMock: Question[] = [
    {
        id: '1',
        title: 'image question',
        questionBody: 'Who is gonna win?',
        type: questionType.Single,
        isDisabled: false,
        idTheme: '5',
        timeLimit: 10,
        difficulty: 2,
        idTeacher: '1',
        linkForHelp: 'https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%BF%D0%B0%D1%83%D0%BA',
        imageLink: 'https://images.prismic.io/mystique/5d7c09b9-40e5-4254-ae1c-2c1cb59aa898_IMG3.jpg?auto=compress,format',
        answers: [
            {
                id: '1',
                body: 'Spidy',
                isCorrect: true
            },
            {
                id: '2',
                body: 'Dr. Oktavius',
                isCorrect: false
            },
            {
                id: '3',
                body: 'Man in black',
                isCorrect: false
            },
            {
                id: '4',
                body: 'Civils',
                isCorrect: false
            }
        ]
    },
    {
        id: '2',
        title: 'image question',
        questionBody: 'Who is gonna win?',
        type: questionType.Single,
        isDisabled: false,
        idTheme: '5',
        timeLimit: 10,
        difficulty: 2,
        idTeacher: '1',
        linkForHelp: 'https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%BF%D0%B0%D1%83%D0%BA',
        imageLink: 'https://images.prismic.io/mystique/5d7c09b9-40e5-4254-ae1c-2c1cb59aa898_IMG3.jpg?auto=compress,format',
        answers: [
            {
                id: '21',
                body: 'Spidy',
                isCorrect: true
            },
            {
                id: '22',
                body: 'Dr. Oktavius',
                isCorrect: false
            },
            {
                id: '23',
                body: 'Man in black',
                isCorrect: false
            },
            {
                id: '24',
                body: 'Civils',
                isCorrect: false
            }
        ]
    },
    {
        id: '3',
        title: 'image question',
        questionBody: 'Who is gonna win?',
        type: questionType.Single,
        isDisabled: false,
        idTheme: '5',
        timeLimit: 10,
        difficulty: 2,
        idTeacher: '1',
        linkForHelp: 'https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%BF%D0%B0%D1%83%D0%BA',
        imageLink: 'https://images.prismic.io/mystique/5d7c09b9-40e5-4254-ae1c-2c1cb59aa898_IMG3.jpg?auto=compress,format',
        answers: [
            {
                id: '31',
                body: 'Spidy',
                isCorrect: true
            },
            {
                id: '32',
                body: 'Dr. Oktavius',
                isCorrect: false
            },
            {
                id: '33',
                body: 'Man in black',
                isCorrect: false
            },
            {
                id: '34',
                body: 'Civils',
                isCorrect: false
            }
        ]
    },
    {
        id: '4',
        title: 'image question',
        questionBody: 'Who is gonna win?',
        type: questionType.Single,
        isDisabled: true,
        idTheme: '2',
        timeLimit: 10,
        difficulty: 2,
        idTeacher: '1',
        linkForHelp: 'https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%BF%D0%B0%D1%83%D0%BA',
        imageLink: 'https://images.prismic.io/mystique/5d7c09b9-40e5-4254-ae1c-2c1cb59aa898_IMG3.jpg?auto=compress,format',
        answers: [
            {
                id: '41',
                body: 'Spidy',
                isCorrect: true
            },
            {
                id: '42',
                body: 'Dr. Oktavius',
                isCorrect: false
            },
            {
                id: '43',
                body: 'Man in black',
                isCorrect: false
            },
            {
                id: '44',
                body: 'Civils',
                isCorrect: false
            }
        ]
    },
    {
        id: '5',
        title: 'image question',
        questionBody: 'Who is gonna win?',
        type: questionType.Single,
        isDisabled: false,
        idTheme: '2',
        timeLimit: 10,
        difficulty: 2,
        idTeacher: '1',
        linkForHelp: '',
        imageLink: '',
        answers: [
            {
                id: '51',
                body: 'Spidy',
                isCorrect: true
            },
            {
                id: '52',
                body: 'Dr. Oktavius',
                isCorrect: false
            },
            {
                id: '53',
                body: 'Man in black',
                isCorrect: false
            },
            {
                id: '54',
                body: 'Civils',
                isCorrect: false
            }
        ]
    }
]