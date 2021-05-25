import styled from 'styled-components';
import { colors, fontFamilies, gradients } from '../../../utils/variables';

export const Container = styled.section`
    padding: 2.5rem 0;
    background: ${gradients.greenBlue};
`
export const IntroTitle = styled.h2`
    color: ${colors.white};
    font-size: 1.75rem;
    font-family: ${fontFamilies.special};
    margin-bottom: 0;
`

export const IntroSubTitle = styled.h2`
    color: ${colors.whiteGreen};
    font-size: 1rem;

    a {
        color: ${colors.white};
    }
`
