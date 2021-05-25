import Layout from '../components/Layout';
import GlobalStateComponent from '../components/pageBlocks/GlobalStateComponent/GlobalStateComponent';
import DebouncedFetch from '../components/pageBlocks/DebouncedFetch/DebouncedFetch';
import React, { useState } from 'react';
import VikingNameGenerator from '../components/pageBlocks/VikingNameGenerator/VikingNameGenerator';
import { useLocalStorage } from 'react-use';
import { Viking } from '../interfaces';
import IntroComponent from '../components/pageBlocks/IntroComponent/IntroComponent';

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
            <IntroComponent />
            {!!globalViking && (
                <section>
                    <h2>
                        Hi, {globalViking.name}, {globalViking.translation}
                    </h2>
                    <button onClick={unViking}>Unviking yourself</button>
                </section>
            )}
            <GlobalStateComponent />
            <DebouncedFetch />
            <VikingNameGenerator setGlobalViking={setGlobalViking} />
        </Layout>
    );
};

export default IndexPage;
