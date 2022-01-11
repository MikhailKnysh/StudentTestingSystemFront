import React from "react";
import {useSnackbar} from "notistack";
import {subjectApi} from "../../../APIs/subjectService";
import {UseUserStateContext} from "../../../Auth/AuthProvider";
import {Subject} from "../config";
type Subjects = {
    subjects: Subject[],
    handleSubjects: () => void
}

type Props = {
    children?: React.ReactNode
}

const SubjectsContext = React.createContext<Subjects>({
    subjects: [],
    handleSubjects:() => {}
});

export const UseSubjectsContext = () =>
{
    return React.useContext(SubjectsContext);
}

export const SubjectsProvider = (props: Props) =>
{
    const { children } = props;
    const { user } = UseUserStateContext();
    const { enqueueSnackbar } = useSnackbar();
    const [subjects, setSubjects] = React.useState<Subject[]>([]);

    const handleGetAll = React.useCallback(() =>
    {
        subjectApi(user.token)
            .getAll()
            .then(response => {
                setSubjects(() =>  response.data)
            })
            .catch(error => enqueueSnackbar(error.message,{variant: 'error'}));

    },[])

    React.useEffect(() => handleGetAll(), []);

    return (
        <SubjectsContext.Provider value={{subjects: subjects, handleSubjects: handleGetAll}}>
            {children}
        </SubjectsContext.Provider>
    );
}