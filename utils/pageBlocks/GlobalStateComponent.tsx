import React from 'react';
import { createGlobalState } from 'react-use';

interface InitialGlobalStateType {
    firstValue: number;
    secondValue: number;
}

const InitialGlobalState = {
    firstValue: 0,
    secondValue: 0,
};

const useGlobalValue =
    createGlobalState<InitialGlobalStateType>(InitialGlobalState);

const FirstItem = () => {
    const [totals, setTotals] = useGlobalValue();
    return (
        <div>
            <label htmlFor="first-item">First item amount</label>
            <input
                type="number"
                name="first-item"
                onChange={(event) =>
                    setTotals({
                        ...totals,
                        firstValue: parseInt(event.currentTarget.value),
                    })
                }
            />
        </div>
    );
};

const SecondItem = () => {
    const [totals, setTotals] = useGlobalValue();
    return (
        <div>
            <label htmlFor="second-item">Second item amount</label>
            <input
                type="number"
                name="second-item"
                onChange={(event) =>
                    setTotals({
                        ...totals,
                        secondValue: parseInt(event.currentTarget.value),
                    })
                }
            />
        </div>
    );
};

const TotalsOfItems = () => {
    const [totals] = useGlobalValue();
    return (
        <div>
            <label htmlFor="totals">Total amount</label>
            <input
                type="number"
                name="totals"
                disabled={true}
                defaultValue={totals.firstValue + totals.secondValue}
            />
        </div>
    );
};

const GlobalStateComponent = () => {
    return (
        <section>
            <h2>GlobalState</h2>
            <p>
                This demonstrates the power and easiness of the create global
                state hook
            </p>
            <div>
                <FirstItem />
                <SecondItem />
                <TotalsOfItems />
            </div>
        </section>
    );
};

export default GlobalStateComponent;
