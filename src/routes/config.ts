import {OverridableComponent} from "@mui/material/OverridableComponent";
import {SvgIconTypeMap} from "@mui/material";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import QuizIcon from '@mui/icons-material/Quiz';
import FeedIcon from '@mui/icons-material/Feed';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import FactCheckIcon from '@mui/icons-material/FactCheck';


type CustomRoute = {
    path: string,
    name: string,
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {muiName: string}
}

export const teacherRouting: CustomRoute[] = [
    {
        path: '/teacher/subjects',
        name: "Subjects",
        Icon: MenuBookTwoToneIcon
    },
    {
        path: '/teacher/themes',
        name: "Themes",
        Icon: FeedIcon
    },
    {
        path: '/teacher/questions',
        name: "Questions",
        Icon: QuestionAnswerIcon
    },
    {
        path: '/teacher/tests',
        name: "Students tests",
        Icon: QuizIcon
    }
];

export const studentRouting: CustomRoute[] = [
    {
        path: '/student/available',
        name: "Available Tests",
        Icon: DynamicFormIcon
    },
    {
        path: '/student/completed',
        name: "Completed Tests",
        Icon: FactCheckIcon
    }
];

