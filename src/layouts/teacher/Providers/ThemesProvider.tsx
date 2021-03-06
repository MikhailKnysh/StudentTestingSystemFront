import React from "react";
import {useSnackbar} from "notistack";
import {subjectApi} from "../../../APIs/subjectService";
import {UseUserStateContext} from "../../../Auth/AuthProvider";
import {SubjectTheme} from "../config";
import {themeApi} from "../../../APIs/themesService";
import {Loader} from "../../../components/Loader/Loader";

type Themes = {
    themes: SubjectTheme[],
    handleThemes: (subjectId: string) => void,
    currentThemeId: string,
    handleCurrentThemeId: React.Dispatch<React.SetStateAction<string>>
}

type Props = {
    children?: React.ReactNode
}

const ThemesContext = React.createContext<Themes>({
    themes: [],
    handleThemes:(subjectId: string) => {},
    currentThemeId: '',
    handleCurrentThemeId: () => {}
});

export const UseThemesContext = () =>
{
    return React.useContext(ThemesContext);
}

export const ThemesProvider = (props: Props) =>
{
    const { children } = props;
    const { user } = UseUserStateContext();
    const { enqueueSnackbar } = useSnackbar();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [themes, setThemes] = React.useState<SubjectTheme[]>([]);
    const [currentThemeId, setCurrentThemeId] = React.useState<string>('');

    const handleGetAll = React.useCallback((subjectId: string) =>
    {
        setIsLoading(prev => !prev);
        themeApi(user.token)
            .getAll(subjectId)
            .then(response => setThemes(() =>  response.data))
            .catch(error => {
                enqueueSnackbar(error.message, {variant: 'error'})
            })
            .finally(() => setIsLoading(prev => !prev));

    },[])

    return (
        <ThemesContext.Provider
            value={{
                themes: themes,
                handleThemes: handleGetAll,
                currentThemeId: currentThemeId,
                handleCurrentThemeId: setCurrentThemeId
                }}
        >
            {children}
            <Loader show={isLoading}/>
        </ThemesContext.Provider>
    );
}