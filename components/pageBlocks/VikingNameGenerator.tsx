import axios from 'axios';
import { useState } from 'react';
import { useLogger } from 'react-use';
import { Gender, VikingReturnType } from '../../interfaces';

const VikingNameGenerator = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState<Gender>(Gender.MALE);
    const [possibleVikings, setPossibleVikings] = useState<VikingReturnType[]>(
        []
    );

    const apiPath = '/api/vikingName';

    const getNames = async () => {
        const response = await axios.post(apiPath, {
            name,
            gender,
        });

        if (response.status === 200) {
            const possibleNames: VikingReturnType[] = response.data;
            setPossibleVikings(possibleNames);
        } else {
            useLogger('GetVikingNamesError', response.data);
        }
    };

    const multiplePossibilities = possibleVikings.length > 1;

    return (
        <section>
            <h2>Viking name generator</h2>
            <p>
                This component will calculate your ideal viking name. Check it
                out!
            </p>
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
                        <article>
                            <h4>Viking {idx + 1}</h4>
                            <h5>Viking name: {possibleViking.name}</h5>
                            <h6>Meaning: {possibleViking.translation}</h6>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
};

export default VikingNameGenerator;
