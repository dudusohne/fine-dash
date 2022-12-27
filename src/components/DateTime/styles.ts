import styled from "styled-components";

export const TimeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 5rem;
    height: 5rem;
    border-radius: 8px;
    border: 2px solid ${props => props.theme.color.primary}
`