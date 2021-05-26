import axios from 'axios';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
    useCopyToClipboard,
    useFirstMountState,
    useLocalStorage,
} from 'react-use';
import { Gender, Viking, VikingReturnType } from '../../../interfaces';
import { colors } from '../../../utils/variables';
import {
    Button,
    LayoutContainer,
    LayoutContainerSubTitle,
    LayoutContainerTitle,
} from '../../Layout.styles';
import {
    VikingParameterBlock,
    VikingParametersContainer,
    ErrorMessage,
    AlgorithmTitle,
    VikingBlock,
    VikingBlocksContainer,
    VikingIndex,
    VikingName,
    VikingMeaning,
    ButtonContainer,
} from './VikingNameGenerator.styles';

const VikingNameGenerator = ({
    setGlobalViking,
}: {
    setGlobalViking: (viking: Viking) => void;
}) => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState<Gender>(Gender.MALE);
    const [possibleVikings, setPossibleVikings] = useState<VikingReturnType[]>(
        []
    );

    const isFirstMount = useFirstMountState();
    const [copyState, copyToClipboard] = useCopyToClipboard();
    const [, setLocalViking] = useLocalStorage('viking');

    const apiPath = '/api/vikingName';

    const getNames = async () => {
        const response = await axios.post(apiPath, {
            name,
            gender,
        });

        if (response.status === 200) {
            const possibleNames: VikingReturnType[] = response.data;
            setPossibleVikings(possibleNames);
        }
    };

    const copyVikingToClipboard = useCallback(
        (idx: number) => {
            const viking = possibleVikings[idx];
            const textToCopy = `Hello, my viking name is ${viking.name}, which means ${viking.translation}. See you in Valhalla!`;
            copyToClipboard(textToCopy);
        },
        [possibleVikings]
    );

    const identifyAs = useCallback(
        (idx: number) => {
            const viking = possibleVikings[idx];
            setLocalViking(viking);
            setGlobalViking(viking);
        },
        [possibleVikings]
    );

    const multiplePossibilities = possibleVikings.length > 1;

    const hasError = useMemo(() => {
        if (isFirstMount) return false;
        if (possibleVikings.length === 0) return true;
        return false;
    }, [possibleVikings]);

    useEffect(() => {
        if (copyState.value) {
            alert(
                `Viking is succesfully copied to clipboard: ${copyState.value}`
            );
        } else if (copyState.error) {
            alert(
                'Something went wrong copying this viking to your clipboard. Please try again.'
            );
        }
    }, [copyState]);

    return (
        <LayoutContainer
            backgroundColor={colors.lightGrey}
            verticalPadding="2.5rem"
        >
            <LayoutContainerTitle>
                ⛵ Viking name generator
            </LayoutContainerTitle>
            <LayoutContainerSubTitle>
                This component will calculate your ideal viking name. Check it
                out!
                <br />
                <small>
                    This component makes use of the useCopyToClipboard,
                    useFirstMountState and useLocalStorage hooks. In the backend
                    some neat ES6 functions are used
                </small>
            </LayoutContainerSubTitle>
            <VikingParametersContainer>
                <VikingParameterBlock>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.currentTarget.value)}
                    />
                </VikingParameterBlock>
                <VikingParameterBlock>
                    <label htmlFor="gender">Gender:</label>
                    <select
                        name="gender"
                        value={gender}
                        onChange={(event) =>
                            setGender(event.currentTarget.value as Gender)
                        }
                    >
                        <option value={Gender.MALE}>Male</option>
                        <option value={Gender.FEMALE}>Female</option>
                    </select>
                </VikingParameterBlock>
                <Button onClick={getNames}>Get possible vikingnames</Button>
            </VikingParametersContainer>
            {hasError && (
                <ErrorMessage>
                    Sorry, the algorithm didn't match you to a viking. You will
                    never enter Valhalla...
                </ErrorMessage>
            )}
            {possibleVikings.length > 0 && (
                <div>
                    {multiplePossibilities ? (
                        <AlgorithmTitle>
                            There are {possibleVikings.length} viking
                            posibilities
                        </AlgorithmTitle>
                    ) : (
                        <AlgorithmTitle>
                            There is 1 viking possibility
                        </AlgorithmTitle>
                    )}
                    <p>Your algorithm-score is {possibleVikings[0].score}</p>
                    <VikingBlocksContainer>
                        {possibleVikings.map((possibleViking, idx) => (
                            <VikingBlock key={possibleViking.name}>
                                <VikingIndex>Viking {idx + 1}</VikingIndex>
                                <VikingName>
                                    Viking name: {possibleViking.name}
                                </VikingName>
                                <VikingMeaning>
                                    Meaning:{' '}
                                    <strong>
                                        {possibleViking.translation}
                                    </strong>
                                </VikingMeaning>
                                <ButtonContainer>
                                    <Button
                                        onClick={() =>
                                            copyVikingToClipboard(idx)
                                        }
                                    >
                                        Copy to clipboard
                                    </Button>
                                    <Button onClick={() => identifyAs(idx)}>
                                        Identify as {possibleViking.name}
                                    </Button>
                                </ButtonContainer>
                            </VikingBlock>
                        ))}
                    </VikingBlocksContainer>
                </div>
            )}
        </LayoutContainer>
    );
};

export default VikingNameGenerator;
