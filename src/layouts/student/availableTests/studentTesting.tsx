import React from 'react';
import {AvailableTest, Question, StudentsTest, User} from "../../teacher/config";
import {Button, Grid, Link, Paper, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {testMock} from "./testMock";
import {NavLink} from "react-router-dom";
import {StudentTestMock} from "../../teacher/studentsTests/studentTestMock";
import {questionsApi} from "../../../APIs/questionsService";
import {UseUserStateContext} from "../../../Auth/AuthProvider";
import {useSnackbar} from "notistack";
import {QuestionItem} from "./components/questionItem";
import Countdown from "react-countdown";
import {Loader} from "../../../components/Loader/Loader";
import {v4 as uuidv4} from "uuid";

type Props = {
    currentAvailableTest: AvailableTest,
    handleCompletedTest: React.Dispatch<React.SetStateAction<StudentsTest>>
}

export const StudentTesting = (props: Props) => {
    const { handleCompletedTest, currentAvailableTest} = props;
    const {user} = UseUserStateContext();
    const {enqueueSnackbar} = useSnackbar();
    const [question, setQuestion] = React.useState<Question>(testMock[0]);
    const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [currentAnswerId, setCurrentAnswerId] = React.useState<string>(uuidv4());

    React.useEffect( () => {
        setIsLoading(prev => !prev);
        questionsApi(user.token).getInitQuestion(currentAvailableTest)
            .then(response => setQuestion(response.data))
            .catch(error => enqueueSnackbar(error.message, {variant: "error"}))
            .finally(() => setIsLoading(prev => !prev))
    }, [])

    const handleNext = () => {
        questionsApi(user.token).studentAnswerCreate({studentId: user.id, answerId:currentAnswerId, answerDuration: 45, questionID: question.id})
            .then(() => {
                setCurrentQuestion(prev => ++prev);
            questionsApi(user.token).getNext()
                .then(response => setQuestion(response.data))
                .catch(error => enqueueSnackbar(error.message, {variant: "error"}))
                .finally(() => setIsLoading(prev => !prev))
            }
            )
            .catch(error => enqueueSnackbar(error.message, {variant: "error"}))
            .finally(() => setIsLoading(prev => !prev))
    }

    return (
        <Paper elevation={3} sx={{ maxWidth: '800px', mx: 'auto', p:2}}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant='h6' sx={{mb:1}}>Time limit:
                    <Countdown date={Date.now() + question.timeLimit*1000}>
                        <Typography>Time is out! Click next.</Typography>
                    </Countdown>
                </Typography>
            </Grid>
            <Grid item xs={12}>
            <QuestionItem questionState={question} handleCurrentAnswerId={setCurrentAnswerId}/>
            </Grid>

            <Grid item xs={12} sx={{display: 'flex'}}>
                <Box sx={{flexGrow: 1}} />
                {currentQuestion < currentAvailableTest.theme.countQuestions
                    ? <Button variant='contained' onClick={handleNext}> Next </Button>
                    : <Link to='/student/available/result' component={NavLink} sx={{textDecoration: 'none'}}>
                        <Button
                            variant='contained'
                            onClick={() => handleCompletedTest(StudentTestMock[3])}
                        >
                            Finish
                        </Button>
                      </Link>
                }
            </Grid>
            <Loader show={isLoading} />
        </Grid>
        </Paper>
    );
};