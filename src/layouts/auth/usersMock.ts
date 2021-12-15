import {User, UserRole} from "../teacher/config";

export const SignInUsers: User[] = [
    {
        idUser: '1',
        firstName: 'Petrov',
        lastName: 'Petr',
        token: '1',
        expires: 14400,
        email: 'petr@i.ua',
        userRole: UserRole.student
    },
    {
        idUser: '2',
        firstName: 'Misha',
        lastName: 'Knysh',
        token: '2',
        expires: 14400,
        email: 'mishadnepr347@gmail.com',
        userRole: UserRole.teacher
    }
]

export type Login = {
    email: string,
    password: string
}

export const UsersPasswords: Login[] = [
    {
        email: 'petr@i.ua',
        password: '123'
    },
    {
        email: 'mishadnepr347@gmail.com',
        password: 'купилдиплом'
    }
]

