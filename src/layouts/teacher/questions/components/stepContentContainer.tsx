import React from 'react';
import StepQuestion from "./stepQuestion";
import StepAnswers from "./stepAnswers";
import StepReview from "./stepReview";
import {Question, User} from "../../config";

type Props = {
    step: number,
    handleStep: React.Dispatch<React.SetStateAction<number>>,
    questionState: Question,
    handleQuestionState: React.Dispatch<React.SetStateAction<Question>>,
    isUpdate: boolean
}

export const StepContentContainer = (props: Props) => {
    const { step, handleStep, questionState, handleQuestionState, isUpdate} = props;

    const handleNext = () => {
        handleStep(prev=>++prev);
    }
    const handlePrevious = () => {
        handleStep(prev=>--prev);
    }

    switch (step) {
        case 0:
            return <StepQuestion
                        step={step}
                        handleNext={handleNext}
                        questionState={questionState}
                        handleQuestionState={handleQuestionState}
                    />
        case 1:
            return <StepAnswers
                        step={step}
                        handleNext={handleNext}
                        handlePrevious={handlePrevious}
                        questionState={questionState}
                        handleQuestionState={handleQuestionState}
                    />
        case 2:
            return <StepReview
                        handleNext={handleNext}
                        handlePrevious={handlePrevious}
                        questionState={questionState}
                        isUpdate={isUpdate}
                    />
        default:
            throw new Error('No content')
    }
};