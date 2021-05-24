import Layout from '../components/Layout';
import Link from 'next/link';
import { Container } from '../components/Layout.styles';
import GlobalStateComponent from '../components/pageBlocks/GlobalStateComponent';
import DebouncedFetch from '../components/pageBlocks/DebouncedFetch';
import React from 'react';
import VikingNameGenerator from '../components/pageBlocks/VikingNameGenerator';

const IndexPage = () => (
    <Layout title="React Use Showcase">
        <Container>
            <section>
                <h2>Intro</h2>
                <p>
                    This small app showcases some neat community driven hooks
                    that are integrated in the{' '}
                    <Link href="https://github.com/streamich/react-use">
                        <a target="_blank">react-use</a>
                    </Link>{' '}
                    package.
                </p>
            </section>
            <GlobalStateComponent />
            <DebouncedFetch />
            <VikingNameGenerator />
        </Container>
    </Layout>
);

export default IndexPage;
