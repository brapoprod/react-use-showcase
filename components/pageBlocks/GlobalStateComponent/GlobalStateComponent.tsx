import React from 'react';
import { createGlobalState } from 'react-use';
import { colors } from '../../../utils/variables';
import {
    LayoutContainer,
    LayoutContainerSubTitle,
    LayoutContainerTitle,
    CenteredButton,
} from '../../Layout.styles';
import { ItemContainer, ItemsContainer } from './GlabalStateComponent.styles';

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
        <ItemContainer>
            <label htmlFor="first-item">First item amount:</label>
            <input
                type="number"
                name="first-item"
                value={totals.firstValue}
                onChange={(event) =>
                    setTotals({
                        ...totals,
                        firstValue: parseInt(event.currentTarget.value),
                    })
                }
            />
        </ItemContainer>
    );
};

const SecondItem = () => {
    const [totals, setTotals] = useGlobalValue();
    return (
        <ItemContainer>
            <label htmlFor="second-item">Second item amount:</label>
            <input
                type="number"
                name="second-item"
                value={totals.secondValue}
                onChange={(event) =>
                    setTotals({
                        ...totals,
                        secondValue: parseInt(event.currentTarget.value),
                    })
                }
            />
        </ItemContainer>
    );
};

const TotalsOfItems = () => {
    const [totals] = useGlobalValue();
    return (
        <ItemContainer>
            <label htmlFor="totals">Total amount:</label>
            <input
                type="number"
                name="totals"
                disabled={true}
                defaultValue={totals.firstValue + totals.secondValue}
            />
        </ItemContainer>
    );
};

const GlobalStateComponent = () => {
    const [, setTotals] = useGlobalValue();
    return (
        <LayoutContainer
            backgroundColor={colors.lightGrey}
            verticalPadding="2rem"
        >
            <LayoutContainerTitle>🌈 GlobalState</LayoutContainerTitle>
            <LayoutContainerSubTitle>
                This demonstrates the power and easiness of the create global
                state hook
            </LayoutContainerSubTitle>
            <ItemsContainer>
                <FirstItem />
                <SecondItem />
                <TotalsOfItems />
            </ItemsContainer>
            <CenteredButton onClick={() => setTotals(InitialGlobalState)}>
                Reset
            </CenteredButton>
        </LayoutContainer>
    );
};

export default GlobalStateComponent;
