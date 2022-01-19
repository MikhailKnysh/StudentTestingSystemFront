import React from 'react';
import {Question, StudentAnswer, Answer} from "../../../teacher/config";
import {UseUserStateContext} from "../../../../Auth/AuthProvider";
import {useSnackbar} from "notistack";
import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    CardMedia, Grid,
    IconButton,
    Link, RadioGroup,
    Typography
} from "@mui/material";
import {blue} from "@mui/material/colors";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import {AnswerItem} from "./answerItem";
import {v4 as uuidv4} from "uuid";

type Props = {
    questionState: Question,
    handleCurrentAnswerId: React.Dispatch<React.SetStateAction<string>>
}

export const QuestionItem = (props: Props) => {
    const{questionState, handleCurrentAnswerId} = props;
    const {user} = UseUserStateContext();
    const {enqueueSnackbar} = useSnackbar();
    const [studentAnswer, setStudentAnswer] = React.useState<StudentAnswer>({studentId: user.id, answerId: uuidv4(), questionID: questionState.id, answerDuration: 0});
    const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
    const [currentAnswer, setCurrentAnswer] = React.useState<Answer>(questionState.answers[0]);

    React.useEffect(() => {
        setTimeout(() => {
            setIsDisabled(true);
            console.log('time out');
        }, 60000)
    }, [])


    const handleCurrentAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleCurrentAnswerId(event.target.value);
        setCurrentAnswer(() => questionState.answers.filter(ans => ans.id === event.target.value)[0]);
    }

    return (
        <Card sx={{ position: 'relative'}} >
            <CardHeader
                sx={{textAlign: 'left'}}
                avatar={<Avatar sx={{bgcolor: blue[700]}}><QuestionAnswerIcon /></Avatar>}
                title={questionState.title + '. Time limit: 1:00 min'}
                subheader={questionState.isDisabled &&
                <Typography color='error'>Question is disabled</Typography>
                }
                action={ questionState.linkForHelp &&
                <Link href={questionState.linkForHelp} target="_blank" rel="noreferrer" sx={{textDecoration: 'none'}}>
                    <IconButton size='large' color='primary' sx={{borderRadius: '5px'}}>
                        <Typography>Need help</Typography><ContactSupportIcon />
                    </IconButton>
                </Link>
                }
            />
            {questionState.imageLink &&
            <CardMedia
                component='img'
                image={questionState.imageLink}
                alt='question'
            />
            }
            <CardContent>
                <Typography>
                    {questionState.questionBody}
                </Typography>
                <RadioGroup value={currentAnswer.id} onChange={handleCurrentAnswer}>
                <Grid container spacing={2} sx={{mt:2}}>
                    {questionState.answers.map(answer =>
                        <Grid item xs={6} >
                            <AnswerItem answer={answer} isDisabled={isDisabled}/>
                        </Grid>
                    )}
                </Grid>
            </RadioGroup>
            </CardContent>

        </Card>
    );
};