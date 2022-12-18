import styled from "styled-components";
import { Github } from '@styled-icons/bootstrap/Github'
import { Home } from '@styled-icons/fluentui-system-filled/Home'

export const MenuButtonContainer = styled.button<{isActive: boolean}>`
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
    border: 2px solid ${props => props.theme.color.primary};

    :hover {
        cursor: pointer
    }

    ${props => props.isActive && `
        background-color: #3C3C3C;
        border-color: #59d3e1;
    `}
`

export const GithubIcon = styled(Github)<{isActive: boolean}>`
    width: 40px;
    color: ${props => props.theme.color.primary};

    ${props => props.isActive && `
        color: #59d3e1;
    `}
`

export const HomeIcon = styled(Home)<{isActive: boolean}>`
    width: 40px;
    color: ${props => props.theme.color.primary};

    ${props => props.isActive && `
        color: #59d3e1;
    `}
`

export const IconTitle = styled.span<{isActive: boolean}>`
    font-size: 10px;
    font-weight: bold;
    margin-top: 5px;
    font-family: ${props => props.theme.fontFamily}

    ${props => props.isActive && `
        color: #59d3e1;
    `}
`