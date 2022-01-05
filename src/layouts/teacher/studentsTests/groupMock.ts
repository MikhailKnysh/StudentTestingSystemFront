import {Group, User, UserRole} from "../config";

export const Teachers: User[] = [
    {
        id:'m1',
        role: UserRole.teacher,
        email: 'ms@i.ua',
        firstName: 'Master Sidor',
        lastName: 'Sidorov',
        token: '123',
        expires: 14440
    },
    {
        id:'m2',
        role: UserRole.teacher,
        email: 'mk@i.ua',
        firstName: 'Master Kozel',
        lastName: 'Kozlov',
        token: '123',
        expires: 14440
    },
    {
        id:'m3',
        role: UserRole.teacher,
        email: 'mi@i.ua',
        firstName: 'Master Ivan',
        lastName: 'Ivanov',
        token: '123',
        expires: 14440
    },
    {
        id:'m4',
        role: UserRole.teacher,
        email: 'mp2@i.ua',
        firstName: 'Master Petr',
        lastName: 'Petrov',
        token: '123',
        expires: 14440
    }
]

export const Students: User[] = [
    {
        id:'1',
        role: UserRole.student,
        email: 's@i.ua',
        firstName: 'Sidor',
        lastName: 'Sidorov',
        token: '123',
        expires: 14440
    },
    {
        id:'2',
        role: UserRole.student,
        email: 'k@i.ua',
        firstName: 'Kozel',
        lastName: 'Kozlov',
        token: '123',
        expires: 14440
    },
    {
        id:'3',
        role: UserRole.student,
        email: 'i@i.ua',
        firstName: 'Ivan',
        lastName: 'Ivanov',
        token: '123',
        expires: 14440
    },
    {
        id:'4',
        role: UserRole.student,
        email: 'p2@i.ua',
        firstName: 'Petr',
        lastName: 'Petrov',
        token: '123',
        expires: 14440
    },
    {
        id:'5',
        role: UserRole.student,
        email: 'p@i.ua',
        firstName: 'Pavel',
        lastName: 'Pavlov',
        token: '123',
        expires: 14440
    },
    {
        id:'6',
        role: UserRole.student,
        email: 'm@i.ua',
        firstName: 'Maksim',
        lastName: 'Maksimov',
        token: '123',
        expires: 14440
    },
    {
        id:'7',
        role: UserRole.student,
        email: 'm2@i.ua',
        firstName: 'Mihail',
        lastName: 'Mihailov',
        token: '123',
        expires: 14440
    },
    {
        id:'8',
        role: UserRole.student,
        email: 'k2@i.ua',
        firstName: 'Konstantin',
        lastName: 'Konstantinov',
        token: '123',
        expires: 14440
    },
    {
        id:'9',
        role: UserRole.student,
        email: 'r@i.ua',
        firstName: 'Rostik',
        lastName: 'Rostikov',
        token: '123',
        expires: 14440
    },
    {
        id:'10',
        role: UserRole.student,
        email: 'a@i.ua',
        firstName: 'Aleksei',
        lastName: 'Alekseev',
        token: '123',
        expires: 14440
    },
]

export const Groups: Group[] = [
    {
        id: '1',
        title: 'IIS17',
        users: Students
    },
    {
        id: '2',
        title: 'IIS18',
        users: []
    },
    {
        id: '3',
        title: 'IIS19',
        users: []
    },
]