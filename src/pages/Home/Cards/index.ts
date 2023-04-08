import styled from 'styled-components';

export const FirstCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 78%;
  max-width: 800px;

  border-radius: 40px;
  background: #3c3c3c;
  box-shadow: -1px 1px 57px -1px rgba(0, 0, 0, 0.31);
  -webkit-box-shadow: -1px 1px 57px -1px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: -1px 1px 57px -1px rgba(0, 0, 0, 0.31);

  img {
    height: 120px;
    width: 120px;
    margin-right: -30px;
    margin-bottom: -20px;
    align-self: flex-end;
  }

  padding: 30px;
`;

export const SecondCard = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 78%;
  max-width: 800px;
  align-items: center;

  border-radius: 0px 70px 0px 70px;
  background: #3c3c3c;
  box-shadow: -1px 1px 57px -1px rgba(0, 0, 0, 0.31);
  -webkit-box-shadow: -1px 1px 57px -1px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: -1px 1px 57px -1px rgba(0, 0, 0, 0.31);

  z-index: 0;

  img {
    height: 120px;
    width: 120px;
    margin-left: -20px;
    margin-top: -20px;
  }

  padding: 30px;
`;

export const ThirdCard = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 78%;
  max-width: 800px;
  align-items: center;

  border-radius: 40px;
  background: #f5f5f5;
  box-shadow: -1px 1px 57px -1px rgba(0, 0, 0, 0.31);
  -webkit-box-shadow: -1px 1px 57px -1px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: -1px 1px 57px -1px rgba(0, 0, 0, 0.31);

  z-index: 0;

  img {
    margin: -20px 0px 0px -20px;
    height: 120px;
    width: 120px;
  }

  padding: 30px;
`;
