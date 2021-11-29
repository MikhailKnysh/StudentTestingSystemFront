import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {SignIn} from "../layouts/signin";
import {SignUp} from "../layouts/signup";
import {StudentsLayout} from "../layouts/student/studentsLayout";
import {TeacherLayout} from "../layouts/teacher/profile/teacherLayout";
import {UserRole} from "../layouts/teacher/config";

export const RootRouter = (props:any) => {
    const {user, handleUser} = props;

    return (
        <BrowserRouter>
            <Routes>
                {user.userRole === UserRole.guest &&
                <>
                    <Route path="/*" element={<SignIn handleUser={handleUser}/>}/>
                    <Route path="/signup" element={<SignUp />}/>
                </>
                }
                {user.userRole === UserRole.student &&
                <>
                    <Route path="/student*" element={<StudentsLayout user={user} handleUser={handleUser}/>}/>
                </>
                }
                {user.userRole === UserRole.teacher &&
                <>
                    <Route path="/teacher*" element={<TeacherLayout user={user} handleUser={handleUser}/>}/>
                </>
                }

            </Routes>
        </BrowserRouter>
    )
}