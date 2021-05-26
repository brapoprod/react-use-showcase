import styled from 'styled-components';
import { colors, devices } from '../../../utils/variables';

export const VikingParametersContainer = styled.div`
    width: 20rem;
    margin-bottom: 2rem;
`;
export const VikingParameterBlock = styled.div`
    margin-bottom: 0.5rem;
    label {
        margin-right: 1rem;
        margin-bottom: 0;
    }

    select,
    input {
        width: 100%;
        height: 2rem;
    }
`;

export const ErrorMessage = styled.h3`
    color: ${colors.red};
`;
export const AlgorithmTitle = styled.h3`
    margin-bottom: 0;
`;
export const VikingBlock = styled.article`
    background-color: ${colors.white};
    border-radius: 0.5rem;
    width: auto;
    padding: 1rem;
    box-shadow: 0px 10px 27px -7px rgba(0, 0, 0, 0.34);
`;

export const VikingBlocksContainer = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(1, 1fr);

    @media ${devices.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${devices.laptopL} {
        grid-template-columns: repeat(3, 1fr);
    }
`;
export const VikingIndex = styled.h4`
    border-bottom: 1px solid ${colors.mainGreen};
    margin-bottom: 1rem;
`;
export const VikingName = styled.h5`
    background-color: ${colors.blue};
    padding: 0.5rem 1rem;
    color: ${colors.white};
    margin-bottom: 0;
    font-size: 1rem;
`;
export const VikingMeaning = styled.h6`
    font-size: 0.75rem;
    font-weight: light;
`;
export const ButtonContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: space-evenly;

    button {
        margin: 0 0.125rem;
    }
`;
