import {Group, User, UserRole} from "../config";

export const Teachers: User[] = [
    {
        idUser:'m1',
        userRole: UserRole.teacher,
        email: 'ms@i.ua',
        firstName: 'Master Sidor',
        lastName: 'Sidorov',
        token: '123',
        expires: 14440
    },
    {
        idUser:'m2',
        userRole: UserRole.teacher,
        email: 'mk@i.ua',
        firstName: 'Master Kozel',
        lastName: 'Kozlov',
        token: '123',
        expires: 14440
    },
    {
        idUser:'m3',
        userRole: UserRole.teacher,
        email: 'mi@i.ua',
        firstName: 'Master Ivan',
        lastName: 'Ivanov',
        token: '123',
        expires: 14440
    },
    {
        idUser:'m4',
        userRole: UserRole.teacher,
        email: 'mp2@i.ua',
        firstName: 'Master Petr',
        lastName: 'Petrov',
        token: '123',
        expires: 14440
    }
]

export const Students: User[] = [
    {
        idUser:'1',
        userRole: UserRole.student,
        email: 's@i.ua',
        firstName: 'Sidor',
        lastName: 'Sidorov',
        token: '123',
        expires: 14440
    },
    {
        idUser:'2',
        userRole: UserRole.student,
        email: 'k@i.ua',
        firstName: 'Kozel',
        lastName: 'Kozlov',
        token: '123',
        expires: 14440
    },
    {
        idUser:'3',
        userRole: UserRole.student,
        email: 'i@i.ua',
        firstName: 'Ivan',
        lastName: 'Ivanov',
        token: '123',
        expires: 14440
    },
    {
        idUser:'4',
        userRole: UserRole.student,
        email: 'p2@i.ua',
        firstName: 'Petr',
        lastName: 'Petrov',
        token: '123',
        expires: 14440
    },
    {
        idUser:'5',
        userRole: UserRole.student,
        email: 'p@i.ua',
        firstName: 'Pavel',
        lastName: 'Pavlov',
        token: '123',
        expires: 14440
    },
    {
        idUser:'6',
        userRole: UserRole.student,
        email: 'm@i.ua',
        firstName: 'Maksim',
        lastName: 'Maksimov',
        token: '123',
        expires: 14440
    },
    {
        idUser:'7',
        userRole: UserRole.student,
        email: 'm2@i.ua',
        firstName: 'Mihail',
        lastName: 'Mihailov',
        token: '123',
        expires: 14440
    },
    {
        idUser:'8',
        userRole: UserRole.student,
        email: 'k2@i.ua',
        firstName: 'Konstantin',
        lastName: 'Konstantinov',
        token: '123',
        expires: 14440
    },
    {
        idUser:'9',
        userRole: UserRole.student,
        email: 'r@i.ua',
        firstName: 'Rostik',
        lastName: 'Rostikov',
        token: '123',
        expires: 14440
    },
    {
        idUser:'10',
        userRole: UserRole.student,
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