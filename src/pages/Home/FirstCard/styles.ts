import styled from 'styled-components';

export const FirstCardContainer = styled.div`
  display: flex;
  height: 340px;
  width: 60%;

  border: 1px solid ${(props) => props.theme.color.primary};
  border-radius: 12px;
  box-shadow: -1px 1px 57px -1px rgba(0, 0, 0, 0.31);
  -webkit-box-shadow: -1px 1px 57px -1px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: -1px 1px 57px -1px rgba(0, 0, 0, 0.31);

  img {
    height: 140px;
    width: 140px;
  }
`;
