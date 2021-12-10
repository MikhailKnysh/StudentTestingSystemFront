import {Question} from "../../teacher/config";
import {questionType} from "../../teacher/questions/config";

export const testMock: Question[] = [
    {
        id: '1',
        title: 'Text question',
        questionBody: 'What company developed React?',
        type: questionType.Single,
        isDisabled: false,
        idTheme: '1',
        timeLimit: 10,
        difficulty: 1,
        idTeacher: '1',
        linkForHelp: 'https://ru.wikipedia.org/wiki/React',
        imageLink: 'https://habrastorage.org/webt/z1/bu/fm/z1bufmx1tce1wxwjm92w7wz_7lq.png',
        answers: [
            {
                id: '1',
                body: 'Twitter',
                isCorrect: false
            },
            {
                id: '2',
                body: 'Amazon',
                isCorrect: false
            },
            {
                id: '3',
                body: 'Google',
                isCorrect: false
            },
            {
                id: '4',
                body: 'Facebook',
                isCorrect: true
            }
        ]
    },
    {
        id: '2',
        title: 'Syntax question',
        questionBody: 'Where function is provided correctly?',
        type: questionType.Single,
        isDisabled: false,
        idTheme: '1',
        timeLimit: 30,
        difficulty: 3,
        idTeacher: '1',
        linkForHelp: 'https://ru.reactjs.org/docs/faq-functions.html',
        imageLink: 'https://habrastorage.org/webt/z1/bu/fm/z1bufmx1tce1wxwjm92w7wz_7lq.png',
        answers: [
            {
                id: '21',
                body: 'argument=(this.someFunction)',
                isCorrect: true
            },
            {
                id: '22',
                body: 'argument=(this.someFunction)',
                isCorrect: true
            },
            {
                id: '23',
                body: 'argument=(this.someFunction)',
                isCorrect: true
            },
            {
                id: '24',
                body: 'argument=(this.someFunction)',
                isCorrect: true
            }
        ]
    },
    {
        id: '3',
        title: 'image question',
        questionBody: 'Think before answer',
        type: questionType.Single,
        isDisabled: false,
        idTheme: '1',
        timeLimit: 50,
        difficulty: 4,
        idTeacher: '1',
        linkForHelp: 'https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D1%87%D0%BD%D0%BE%D1%81%D1%82%D1%8C',
        imageLink: 'https://html5hive.org/wp-content/uploads/2015/10/Screen-Shot-2015-10-28-at-5.16.09-PM.png.webp',
        answers: [
            {
                id: '31',
                body: '10',
                isCorrect: false
            },
            {
                id: '32',
                body: '25',
                isCorrect: false
            },
            {
                id: '33',
                body: '50',
                isCorrect: false
            },
            {
                id: '34',
                body: 'More',
                isCorrect: true
            }
        ]
    },
    {
        id: '4',
        title: 'Text question',
        questionBody: 'What are the features of React? ',
        type: questionType.Multiple,
        isDisabled: false,
        idTheme: '1',
        timeLimit: 40,
        difficulty: 2,
        idTeacher: '1',
        linkForHelp: 'https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%BF%D0%B0%D1%83%D0%BA',
        imageLink: 'https://habrastorage.org/webt/z1/bu/fm/z1bufmx1tce1wxwjm92w7wz_7lq.png',
        answers: [
            {
                id: '41',
                body: 'It uses the virtual DOM instead of the real DOM.',
                isCorrect: true
            },
            {
                id: '42',
                body: 'It uses server-side rendering.',
                isCorrect: true
            },
            {
                id: '43',
                body: 'It follows uni-directional data flow or data binding.',
                isCorrect: true
            },
            {
                id: '44',
                body: 'It uses OOP principles.',
                isCorrect: false
            }
        ]
    },
    {
        id: '5',
        title: 'Text question',
        questionBody: 'What are the limitations of React?',
        type: questionType.Multiple,
        isDisabled: false,
        idTheme: '1',
        timeLimit: 50,
        difficulty: 2,
        idTeacher: '1',
        linkForHelp: 'https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%BF%D0%B0%D1%83%D0%BA',
        imageLink: 'https://habrastorage.org/webt/z1/bu/fm/z1bufmx1tce1wxwjm92w7wz_7lq.png',
        answers: [
            {
                id: '51',
                body: 'React is just a library, not a full-blown framework',
                isCorrect: true
            },
            {
                id: '52',
                body: 'Its library is very large and takes time to understand',
                isCorrect: true
            },
            {
                id: '53',
                body: 'Coding gets complex as it uses inline templating and JSX',
                isCorrect: true
            },
            {
                id: '54',
                body: 'It can be little difficult for the novice programmers to understand',
                isCorrect: true
            }
        ]
    },
    {
        id: '6',
        title: 'Text question',
        questionBody: 'What company developed React?',
        type: questionType.Single,
        isDisabled: false,
        idTheme: '1',
        timeLimit: 10,
        difficulty: 1,
        idTeacher: '1',
        linkForHelp: 'https://ru.wikipedia.org/wiki/React',
        imageLink: 'https://habrastorage.org/webt/z1/bu/fm/z1bufmx1tce1wxwjm92w7wz_7lq.png',
        answers: [
            {
                id: '1',
                body: 'Twitter',
                isCorrect: false
            },
            {
                id: '2',
                body: 'Amazon',
                isCorrect: false
            },
            {
                id: '3',
                body: 'Google',
                isCorrect: false
            },
            {
                id: '4',
                body: 'Facebook',
                isCorrect: true
            }
        ]
    },
    {
        id: '7',
        title: 'Syntax question',
        questionBody: 'Where function is provided correctly?',
        type: questionType.Single,
        isDisabled: false,
        idTheme: '1',
        timeLimit: 30,
        difficulty: 3,
        idTeacher: '1',
        linkForHelp: 'https://ru.reactjs.org/docs/faq-functions.html',
        imageLink: 'https://habrastorage.org/webt/z1/bu/fm/z1bufmx1tce1wxwjm92w7wz_7lq.png',
        answers: [
            {
                id: '21',
                body: 'argument=(this.someFunction)',
                isCorrect: true
            },
            {
                id: '22',
                body: 'argument=(this.someFunction)',
                isCorrect: true
            },
            {
                id: '23',
                body: 'argument=(this.someFunction)',
                isCorrect: true
            },
            {
                id: '24',
                body: 'argument=(this.someFunction)',
                isCorrect: true
            }
        ]
    },
    {
        id: '8',
        title: 'image question',
        questionBody: 'Think before answer',
        type: questionType.Single,
        isDisabled: false,
        idTheme: '1',
        timeLimit: 50,
        difficulty: 4,
        idTeacher: '1',
        linkForHelp: 'https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D1%87%D0%BD%D0%BE%D1%81%D1%82%D1%8C',
        imageLink: 'https://html5hive.org/wp-content/uploads/2015/10/Screen-Shot-2015-10-28-at-5.16.09-PM.png.webp',
        answers: [
            {
                id: '31',
                body: '10',
                isCorrect: false
            },
            {
                id: '32',
                body: '25',
                isCorrect: false
            },
            {
                id: '33',
                body: '50',
                isCorrect: false
            },
            {
                id: '34',
                body: 'More',
                isCorrect: true
            }
        ]
    },
    {
        id: '9',
        title: 'Text question',
        questionBody: 'What are the features of React? ',
        type: questionType.Multiple,
        isDisabled: false,
        idTheme: '1',
        timeLimit: 40,
        difficulty: 2,
        idTeacher: '1',
        linkForHelp: 'https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%BF%D0%B0%D1%83%D0%BA',
        imageLink: 'https://habrastorage.org/webt/z1/bu/fm/z1bufmx1tce1wxwjm92w7wz_7lq.png',
        answers: [
            {
                id: '41',
                body: 'It uses the virtual DOM instead of the real DOM.',
                isCorrect: true
            },
            {
                id: '42',
                body: 'It uses server-side rendering.',
                isCorrect: true
            },
            {
                id: '43',
                body: 'It follows uni-directional data flow or data binding.',
                isCorrect: true
            },
            {
                id: '44',
                body: 'It uses OOP principles.',
                isCorrect: false
            }
        ]
    },
    {
        id: '10',
        title: 'Text question',
        questionBody: 'What are the limitations of React?',
        type: questionType.Multiple,
        isDisabled: false,
        idTheme: '1',
        timeLimit: 50,
        difficulty: 2,
        idTeacher: '1',
        linkForHelp: 'https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%BF%D0%B0%D1%83%D0%BA',
        imageLink: 'https://habrastorage.org/webt/z1/bu/fm/z1bufmx1tce1wxwjm92w7wz_7lq.png',
        answers: [
            {
                id: '51',
                body: 'React is just a library, not a full-blown framework',
                isCorrect: true
            },
            {
                id: '52',
                body: 'Its library is very large and takes time to understand',
                isCorrect: true
            },
            {
                id: '53',
                body: 'Coding gets complex as it uses inline templating and JSX',
                isCorrect: true
            },
            {
                id: '54',
                body: 'It can be little difficult for the novice programmers to understand',
                isCorrect: true
            }
        ]
    }
]