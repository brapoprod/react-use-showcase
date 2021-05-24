import axios from 'axios';
import React, { useCallback, useMemo, useState } from 'react';
import { useDebounce, usePrevious } from 'react-use';

const DebouncedFetch = () => {
    const [inputValue, setInputValue] = useState('');
    const [delay, setDelay] = useState(2000);
    const [fetchedParams, setFetchedParams] = useState(null);
    const [isDebouncing, setIsDebouncing] = useState(false);
    const previousInput = usePrevious(inputValue);

    const apiPath = '/api/returnParams';

    const fetchParams = async (value: string) => {
        const response = await axios.post(apiPath, { value });
        if (response.status === 200) setFetchedParams(response.data.value);
    };

    const [, cancel] = useDebounce(
        () => {
            if (inputValue !== '' && previousInput !== inputValue) {
                fetchParams(inputValue);
            }
            setIsDebouncing(false);
        },
        delay,
        [inputValue]
    );

    const delayInSeconds = useMemo(() => {
        if (typeof delay === 'number') return delay / 1000;
    }, [delay]);

    const fetchedBlock = useMemo(
        () => (
            <div>
                Fetched data after {delayInSeconds} seconds:
                <p>{fetchedParams}</p>
            </div>
        ),
        [fetchedParams]
    );

    const cancelDebounce = useCallback(() => {
        cancel();
        setIsDebouncing(false);
    }, [isDebouncing]);

    return (
        <section>
            <h2>DebouncedFetch</h2>
            <p>
                This calls the api with a debounce on the entered params and
                also uses previous state to prevent unnecessary fetches to the
                api
            </p>
            <div>
                <div>
                    <label htmlFor="entered-delay">Delay in ms:</label>
                    <input
                        type="number"
                        step={500}
                        name="entered-delay"
                        value={delay}
                        onChange={(event) =>
                            setDelay(parseInt(event.currentTarget.value))
                        }
                    />
                </div>
                <div>
                    <label htmlFor="entered-value">Data to fetch:</label>
                    <input
                        type="text"
                        name="entered-value"
                        value={inputValue}
                        onChange={(event) => {
                            if (!isDebouncing) setIsDebouncing(true);
                            setInputValue(event.currentTarget.value);
                        }}
                    />
                </div>
                {isDebouncing && (
                    <div>
                        <button onClick={cancelDebounce}>
                            Cancel debounce
                        </button>
                    </div>
                )}

                {!!fetchedParams && fetchedBlock}
            </div>
        </section>
    );
};

export default DebouncedFetch;
