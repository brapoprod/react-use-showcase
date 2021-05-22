import styled from 'styled-components'
import { colors } from '../utils/variables'

export const Header = styled.header`
    background-color: ${colors.mainGreen};

    a {
        color: ${colors.white} !important;

        &:hover {
            color: ${colors.secondaryGreen} !important;
        }
    }
`

export const Container = styled.div`
    padding: 1rem;
`

export const Footer = styled.footer`
    padding: 0.5rem 0;
    text-align: center;
    background-color: ${colors.blue};
    color: ${colors.white};
`
