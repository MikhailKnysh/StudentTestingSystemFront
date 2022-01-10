import React from "react";
import {useSnackbar} from "notistack";
import {subjectApi} from "../../../APIs/subjectService";
import {UseUserStateContext} from "../../../Auth/AuthProvider";
import {SubjectTheme} from "../config";

type Themes = {
    themes: SubjectTheme[],
    handleThemes: () => void
}

type Props = {
    children?: React.ReactNode
}

const SubjectsContext = React.createContext<Themes>({
    themes: [],
    handleThemes:() => {}
});

export const UseThemesContext = () =>
{
    return React.useContext(SubjectsContext);
}

export const ThemesProvider = (props: Props) =>
{
    const { children } = props;
    const { user } = UseUserStateContext();
    const { enqueueSnackbar } = useSnackbar();
    const [themes, setThemes] = React.useState<SubjectTheme[]>([]);

    const handleGetAll = React.useCallback(() =>
    {
        subjectApi(user.token)
            .getAll()
            .then(response => setThemes(() =>  response.data))
            .catch(error => enqueueSnackbar(error,{variant: 'error'}));

    },[])

    React.useEffect(() => handleGetAll(), [])

    return (
        <SubjectsContext.Provider value={{themes: themes, handleThemes: handleGetAll}}>
            {children}
        </SubjectsContext.Provider>
    );
}