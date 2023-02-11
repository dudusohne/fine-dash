import styled from "styled-components";

export const PrimaryText = styled.span`
    font-size: 20px;
    font-weight: bold;
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.color.primary};
`

export const SecundaryText = styled.span`
    font-size: 14px;
    font-weight: bold;
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.color.greyDark};
`    