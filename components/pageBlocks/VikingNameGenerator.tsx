import axios from 'axios';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useCopyToClipboard, useFirstMountState, useLocalStorage } from 'react-use';
import { Gender, Viking, VikingReturnType } from '../../interfaces';

const VikingNameGenerator = ({setGlobalViking}: {setGlobalViking: (viking: Viking) => void }) => {
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
        [possibleVikings],
    )

    const identifyAs = useCallback(
        (idx: number) => {
            const viking = possibleVikings[idx];
            setLocalViking(viking)
            setGlobalViking(viking)
        },
        [possibleVikings],
    )

    const multiplePossibilities = possibleVikings.length > 1;

    const hasError = useMemo(() => {
        if (isFirstMount) return false;
        if (possibleVikings.length === 0) return true;
        return false;
    }, [possibleVikings]);

    useEffect(() => {
        if (copyState.value) {
            alert(`Viking is succesfully copied to clipboard: ${copyState.value}`)
        } else if (copyState.error) {
            alert('Something went wrong copying this viking to your clipboard. Please try again.')
        }

    }, [copyState])

    return (
        <section>
            <h2>Viking name generator</h2>
            <p>
                This component will calculate your ideal viking name. Check it
                out!
            </p>
            <small>This component makes use of the useFirstMountState hook. In the backend some neat ES6 functions are used</small>
            <div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(event) => setName(event.currentTarget.value)}
                    />
                </div>
                <div>
                    <label htmlFor="gender">Name:</label>
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
                </div>
                <button onClick={getNames}>Get possible vikingnames</button>
            </div>
            {hasError && (
                <h3>Sorry, the algorithm didn't match you to a viking. You will never enter Valhalla...</h3>
            )}
            {possibleVikings.length > 0 && (
                <div>
                    {multiplePossibilities ? (
                        <h3>
                            There are {possibleVikings.length} viking
                            posibilities
                        </h3>
                    ) : (
                        <h3>There is 1 viking possibility</h3>
                    )}
                    <p>Your algorithm-score is {possibleVikings[0].score}</p>
                    {possibleVikings.map((possibleViking, idx) => (
                        <article key={possibleViking.name}>
                            <h4>Viking {idx + 1}</h4>
                            <h5>Viking name: {possibleViking.name}</h5>
                            <h6>Meaning: {possibleViking.translation}</h6>
                            <button onClick={() => copyVikingToClipboard(idx)}>Copy this to your clipboard</button>
                            <button onClick={() => identifyAs(idx)}>Identify as {possibleViking.name}</button>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
};

export default VikingNameGenerator;
