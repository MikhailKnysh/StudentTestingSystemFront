import React from 'react';
import { StepIconProps } from '@mui/material/StepIcon';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import {ColorLibStepIconRoot} from "./colorLibStepIconRoot";



export function ColorLibStepIcon(props: StepIconProps): JSX.Element {
    const { icon, active, completed, className } = props;

    const icons: { [index: string]: React.ReactElement } = {
        1: <QuestionAnswerIcon />,
        2: <VpnKeyRoundedIcon />,
        3: <VideoLabelIcon />,
    };

    return (
        <ColorLibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(icon)]}
        </ColorLibStepIconRoot>
    );
}