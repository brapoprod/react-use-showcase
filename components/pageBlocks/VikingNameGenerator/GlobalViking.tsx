import React, { FC } from 'react';
import { Viking } from '../../../interfaces';
import { Button } from '../../Layout.styles';
import styled from 'styled-components';
import { colors, gradients } from '../../../utils/variables';

const VikingContainer = styled.section`
    text-align: center;
    padding: 2rem 0;
    background: ${gradients.blueGreen};
`;

const VikingTitle = styled.h2`
    color: ${colors.white};
`;

interface PropsType {
    viking: Viking;
    unViking: () => void;
}

const GlobalViking: FC<PropsType> = ({ viking, unViking }) => {
    return (
        <VikingContainer>
            <VikingTitle>
                Hi, {viking.name}, {viking.translation}
            </VikingTitle>
            <Button onClick={unViking}>Unviking yourself</Button>
        </VikingContainer>
    );
};

export default GlobalViking;
