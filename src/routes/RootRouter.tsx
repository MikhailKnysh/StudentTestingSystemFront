import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import {StudentsLayout} from "../layouts/student/studentsLayout";
import {TeacherLayout} from "../layouts/teacher/profile/teacherLayout";
import {UserRole} from "../layouts/teacher/config";
import { SignIn } from '../layouts/auth/signIn/signIn';
import {SignUp} from "../layouts/auth/signUp/signUp";
import {UseUserStateContext} from "../Auth/AuthProvider";

export const RootRouter = () => {
    const { user } = UseUserStateContext();

    React.useEffect(() =>
    {
        console.log("User^ ", user)
    },[user])
    return (
        <BrowserRouter>
            <Routes>
                {(user.role === UserRole.guest || user.role === UserRole.admin)  &&
                <>
                    <Route path="/signin" element={<SignIn />}/>
                    <Route path="/signup" element={<SignUp />}/>
                    <Route path="/*" element={<Navigate replace to="/signin" />} />
                </>
                }
                {user.role === UserRole.student &&
                <>
                    <Route path="/student/*" element={<StudentsLayout />}/>
                    <Route path="/*" element={<Navigate replace to="/student" />} />
                </>
                }
                {user.role === UserRole.teacher &&
                <>
                    <Route path="/teacher/*" element={<TeacherLayout />}/>
                    <Route path="/*" element={<Navigate replace to="/teacher" />} />
                </>
                }

            </Routes>
        </BrowserRouter>
    )
}