import Layout from '../components/Layout';
import Link from 'next/link';
import { Container } from '../components/Layout.styles';
import GlobalStateComponent from '../components/pageBlocks/GlobalStateComponent';
import DebouncedFetch from '../components/pageBlocks/DebouncedFetch';
import React, { useState } from 'react';
import VikingNameGenerator from '../components/pageBlocks/VikingNameGenerator';
import { useLocalStorage } from 'react-use';
import { Viking } from '../interfaces';

const IndexPage = () => {
    const [localStorageViking, , removeViking] =
        useLocalStorage<Viking>('viking');

    const [globalViking, setGlobalViking] = useState<Viking | null>(
        localStorageViking || null
    );

    const unViking = () => {
        removeViking();
        setGlobalViking(null);
    };

    return (
        <Layout title="React Use Showcase">
            <Container>
                {!!globalViking && (
                    <section>
                        <h2>
                            Hi, {globalViking.name}, {globalViking.translation}
                        </h2>
                        <button onClick={unViking}>Unviking yourself</button>
                    </section>
                )}
                <section>
                    <h2>Intro</h2>
                    <p>
                        This small app showcases some neat community driven
                        hooks that are integrated in the{' '}
                        <Link href="https://github.com/streamich/react-use">
                            <a target="_blank">react-use</a>
                        </Link>{' '}
                        package.
                    </p>
                </section>
                <GlobalStateComponent />
                <DebouncedFetch />
                <VikingNameGenerator setGlobalViking={setGlobalViking} />
            </Container>
        </Layout>
    );
};

export default IndexPage;
