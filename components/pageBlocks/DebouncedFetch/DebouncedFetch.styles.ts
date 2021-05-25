import styled from 'styled-components';
import { ItemContainer } from '../GlobalStateComponent/GlabalStateComponent.styles';

export const CenteredContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0;
`
export const InputContainer = ItemContainer;

export const FetchedTitle = styled.h3`
    margin-top: 1rem;
    margin-bottom: 0;
`