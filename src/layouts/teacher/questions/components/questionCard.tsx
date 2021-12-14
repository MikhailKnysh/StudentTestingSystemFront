import React from 'react';
import {
    Avatar, Backdrop, Box, Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    IconButton,
    Link,
    Modal,
    Typography
} from "@mui/material";
import {blue} from "@mui/material/colors";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import {AnswersView} from "./answersView";
import {Question, User} from "../../config";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import {CreateQuestion} from "../createQuestion";

type Props = {
    user: User,
    questionState: Question,
    handleQuestion: React.Dispatch<React.SetStateAction<Question>>
}

export const QuestionCard = (props: Props) => {
    const {user, questionState, handleQuestion} = props;
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const [onHover, setOnHover] = React.useState<boolean>(false);

    const handleHoverOn = () => setOnHover(true);
    const handleHoverOff = () => setOnHover(false);
    const handleOpen= () => setModalOpen(true);
    const handleClose= () => setModalOpen(false);

    return (
        <div>
            <Modal open={modalOpen} onClose={handleClose} sx={{p: 2, overflow: 'auto', color: '#fff'}}>
                <CreateQuestion user={user} themeId={questionState.idTheme} questionInitialState={questionState} />
            </Modal>
            <Card sx={{width: '100%', minHeight: '600px', position: 'relative'}} onMouseEnter={handleHoverOn} onMouseLeave={handleHoverOff}>
                <Backdrop
                    open={onHover}
                    sx={{
                        color: '#fff',
                        zIndex: 1,
                        position: 'absolute'
                    }}
                >
                    <Button variant='contained' sx={{width: '25%', height: '10%'}} onClick={handleOpen}>Edit</Button>
                </Backdrop>


                        <CardHeader
                                sx={{textAlign: 'left'}}
                                avatar={<Avatar sx={{bgcolor: blue[700]}}><QuestionAnswerIcon /></Avatar>}
                                title={questionState.title + '. Time limit: ' + questionState.timeLimit.getMinutes() + ':' + questionState.timeLimit.getSeconds() + ' min.'}
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

        </div>
    );
};