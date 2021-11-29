import {OverridableComponent} from "@mui/material/OverridableComponent";
import {SvgIconTypeMap} from "@mui/material";
import TableChartIcon from '@mui/icons-material/TableChart';


type CustomRoute = {
    path: string,
    name: string,
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {muiName: string}
}

export const teacherRouting: CustomRoute[] = [
    {
        path: '/teacher/subjects',
        name: "Subjects",
        Icon: TableChartIcon
    },
    {
        path: '/teacher/themes',
        name: "Themes",
        Icon: TableChartIcon
    },
    {
        path: '/teacher/questions',
        name: "Questions",
        Icon: TableChartIcon
    },
    {
        path: '/teacher/tests',
        name: "Students tests",
        Icon: TableChartIcon
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

