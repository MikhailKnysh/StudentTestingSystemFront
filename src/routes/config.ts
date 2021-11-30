import {OverridableComponent} from "@mui/material/OverridableComponent";
import {SvgIconTypeMap} from "@mui/material";
import TableChartIcon from '@mui/icons-material/TableChart';
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import QuizIcon from '@mui/icons-material/Quiz';
import FeedIcon from '@mui/icons-material/Feed';


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
        path: '/student/available-tests',
        name: "Available Tests",
        Icon: TableChartIcon
    },
    {
        path: '/student/completed-tests',
        name: "Completed Tests",
        Icon: TableChartIcon
    }
];

