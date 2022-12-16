import styled from "styled-components";
import { Github } from '@styled-icons/bootstrap/Github'

export const MenuButtonContainer = styled.button`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 60px;
    height: 60px;
    margin-top: 2.1rem;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.color.secondary};
    border-radius: 8px;
    padding: 4px;
`

export const GithubIcon = styled(Github)`
    width: 40px;
    color: ${props => props.theme.color.primary};
`

export const IconTitle = styled.span`
    font-size: 10px;
    font-weight: bold;
    margin-top: 5px;
    font-family: ${props => props.theme.fontFamily}
`