import Link from 'next/link';
import React from 'react';
import { LayoutContainer } from '../../Layout.styles';
import { Container, IntroTitle, IntroSubTitle } from './IntroComponent.styles';

const IntroComponent = () => {
    return (
        <Container>
            <LayoutContainer>
                <IntroTitle>Intro</IntroTitle>
                <IntroSubTitle>
                    This small app showcases some neat community driven hooks
                    that are integrated in the{' '}
                    <Link href="https://github.com/streamich/react-use">
                        <a target="_blank">react-use</a>
                    </Link>{' '}
                    package.
                    <br />
                    This app is built with{' '}
                    <Link href="https://github.com/vercel/next.js/">
                        <a target="_blank">NextJS</a>
                    </Link>
                    ,{' '}
                    <Link href="https://github.com/facebook/react">
                        <a target="_blank">React</a>
                    </Link>
                    ,{' '}
                    <Link href="https://github.com/microsoft/TypeScript">
                        <a target="_blank">TypeScript</a>
                    </Link>{' '}
                    and{' '}
                    <Link href="https://github.com/styled-components/styled-components">
                        <a target="_blank">Styled-Components</a>
                    </Link>
                    .
                </IntroSubTitle>
            </LayoutContainer>
        </Container>
    );
};

export default IntroComponent;
