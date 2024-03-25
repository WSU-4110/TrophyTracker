/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import styled from 'styled-components';

interface FeatureData {
    title: string;
}

const TutorialContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
`;

const TutorialTitle = styled.h1`
    text-align: center;
    color: #333;
`;

const TutorialStep = styled.div`
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
`;

const StepTitle = styled.h2`
    margin-bottom: 10px;
`;

const StepDescription = styled.p`
    margin-bottom: 10px;
`;

const StepImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px;
`;

const AchievementFeaturesData: FeatureData[] = [
    // Add extra feature data
];

const AchievementTrackingTutorial = () => {
    const achievementTrackingData = AchievementFeaturesData.find(
        (feature) => feature.title === 'Achievement Tracking'
    );

    return (
        <TutorialContainer>
            <TutorialTitle>{achievementTrackingData?.title} Tutorial</TutorialTitle>
            <TutorialStep>
                <StepTitle>Step 1: Getting Started</StepTitle>
                <StepDescription>
                    To get started with Achievement Tracking, you first need to...
                    {/* Include steps here with other stuff */}
                </StepDescription>
                <StepImage src="step1.png" alt="Step 1" />
            </TutorialStep>
            <TutorialStep>
                <StepTitle>Step 2: Tracking Your Achievements</StepTitle>
                <StepDescription>
                    Once you&apos;ve set up your account, you can start tracking your achievements by...
                    {/* Include the rest of the instructions */}
                </StepDescription>
                <StepImage src="step2.png" alt="Step 2" />
            </TutorialStep>
            <TutorialStep>
                <StepTitle>Step 3: Managing Your Games and Progress</StepTitle>
                <StepDescription>
                    In addition to tracking your achievements, you can also manage your games and progress by...
                    {/* Include step-by-step instructions here */}
                </StepDescription>
                <StepImage src="step3.png" alt="Step 3" />
            </TutorialStep>
        </TutorialContainer>
    );
};

export default AchievementTrackingTutorial;