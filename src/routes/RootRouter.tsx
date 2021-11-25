import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {SignIn} from "../layouts/signin";
import {SignUp} from "../layouts/signup";
import {StudentsLayout} from "../layouts/student/studentsLayout";
import {TeacherLayout} from "../layouts/teacher/teacherLayout";
import {UserRole} from "../layouts/teacher/config";

export const RootRouter = (props:any) => {
    const {handleUserRole} = props;
    const role = localStorage.getItem("userRole");


    return (
        <BrowserRouter>
            <Routes>
                {role === UserRole.guest.toString() &&
                <>
                    <Route path="/*" element={<SignIn handleUserRole={handleUserRole}/>}/>
                    <Route path="/signup" element={<SignUp />}/>
                </>
                }
                {role === UserRole.student.toString() &&
                <>
                    <Route path="/student*" element={<StudentsLayout handleUserRole={handleUserRole}/>}/>
                </>
                }
                {role === UserRole.teacher.toString() &&
                <>
                    <Route path="/teacher" element={<TeacherLayout handleUserRole={handleUserRole}/>}/>
                </>
                }

            </Routes>
        </BrowserRouter>
    )
}