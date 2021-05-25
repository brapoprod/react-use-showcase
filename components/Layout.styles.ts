import styled from 'styled-components';
import { colors, fontFamilies } from '../utils/variables';

type LayoutContainerProps = {
    backgroundColor?: string;
    verticalPadding?: string;
};

export const Header = styled.header`
    background-color: ${colors.mainGreen};

    a {
        color: ${colors.white} !important;
        font-family: ${fontFamilies.special};

        &:hover {
            color: ${colors.secondaryGreen} !important;
        }
    }
`;

export const LayoutContainer = styled.div`
    padding: ${(props: LayoutContainerProps) => props.verticalPadding || '1rem'}
        2rem;
    ${(props: LayoutContainerProps) =>
        props.backgroundColor
            ? `background-color: ${props.backgroundColor}`
            : ''};
`;

export const LayoutContainerTitle = styled.h2`
    font-family: ${fontFamilies.special};
    font-size: 1.5rem;
    margin-bottom: 0;
`;
export const LayoutContainerSubTitle = styled.p`
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
`;

export const Button = styled.button`
    border: none;
    border-radius: 1.5rem;
    padding: 0.5rem 1rem;
    background-color: ${colors.mainGreen};
    color: ${colors.white};
    font-size: 1rem;
    font-family: ${fontFamilies.normal};
    transition: all 0.1s ease-in-out;

    &:hover {
        background-color: ${colors.whiteGreen};
        color: ${colors.secondaryBlue};
        transition: all 0.1s ease-in-out;
    }
    
    &:focus {
        outline: 0;
    }
`;

export const CenteredButton = styled(Button)`
    display: block;
    margin: 0 auto;
`;

export const Footer = styled.footer`
    padding: 0.5rem 0;
    text-align: center;
    background-color: ${colors.blue};
    color: ${colors.white};
`;
