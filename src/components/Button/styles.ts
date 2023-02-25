import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  border-radius: 8px;

  min-height: 1rem;
  min-width: fit-content;
  padding: 5px 10px 5px 10px;

  border: 1px solid #fff;

  :hover {
    cursor: pointer;
  }
`;

export const ButtonLabel = styled.span`
  font-size: 16px;
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily};
`;
