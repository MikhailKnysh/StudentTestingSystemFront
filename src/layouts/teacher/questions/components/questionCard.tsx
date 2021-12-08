import React from 'react';
import {Avatar, Card, CardContent, CardHeader, CardMedia, Grid, IconButton, Link, Typography} from "@mui/material";
import {blue} from "@mui/material/colors";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import {AnswersView} from "./answersView";
import {Question} from "../../config";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

type Props = {
    questionState: Question
}

export const QuestionCard = (props: Props) => {
    const {questionState} = props;

    return (
        <Card sx={{width: '100%'}}>
            <CardHeader
                sx={{textAlign: 'left'}}
                avatar={<Avatar sx={{bgcolor: blue[700]}}><QuestionAnswerIcon /></Avatar>}
                title={questionState.title}
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
                <Grid container spacing={2} sx={{mt:2}}>
                    {questionState.answers.map(answer =>
                        <Grid item xs={6} >
                            <AnswersView answer={answer} />
                        </Grid>
                    )}
                </Grid>
            </CardContent>
        </Card>
    );
};