import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import {StudentsLayout} from "../layouts/student/studentsLayout";
import {TeacherLayout} from "../layouts/teacher/profile/teacherLayout";
import {UserRole} from "../layouts/teacher/config";
import { SignIn } from '../layouts/auth/signIn/signIn';
import {SignUp} from "../layouts/auth/signUp/signUp";

export const RootRouter = (props:any) => {
    const {user, handleUser} = props;

    return (
        <BrowserRouter>
            <Routes>
                {user.userRole === UserRole.guest &&
                <>
                    <Route path="/signin" element={<SignIn handleUser={handleUser}/>}/>
                    <Route path="/signup" element={<SignUp />}/>
                    <Route path="/*" element={<Navigate replace to="/signin" />} />
                </>
                }
                {user.userRole === UserRole.student &&
                <>
                    <Route path="/student/*" element={<StudentsLayout user={user} handleUser={handleUser}/>}/>
                    <Route path="/*" element={<Navigate replace to="/student" />} />
                </>
                }
                {user.userRole === UserRole.teacher &&
                <>
                    <Route path="/teacher/*" element={<TeacherLayout user={user} handleUser={handleUser}/>}/>
                    <Route path="/*" element={<Navigate replace to="/teacher" />} />
                </>
                }

            </Routes>
        </BrowserRouter>
    )
}