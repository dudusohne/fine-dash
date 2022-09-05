import styled from "styled-components";

import { ArrowBackCircle } from "@styled-icons/ionicons-solid/ArrowBackCircle";
import { rotate } from "../../theme/animations";

export const RepoPage = styled.body`
  display: flex;
  flex-direction: column;
  background-color: #ff5a5f;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 100 60'%3E%3Cg %3E%3Crect fill='%23FF5A5F' width='11' height='11'/%3E%3Crect fill='%23ff5d61' x='10' width='11' height='11'/%3E%3Crect fill='%23ff6164' y='10' width='11' height='11'/%3E%3Crect fill='%23ff6466' x='20' width='11' height='11'/%3E%3Crect fill='%23ff6768' x='10' y='10' width='11' height='11'/%3E%3Crect fill='%23ff6a6b' y='20' width='11' height='11'/%3E%3Crect fill='%23ff6d6d' x='30' width='11' height='11'/%3E%3Crect fill='%23ff706f' x='20' y='10' width='11' height='11'/%3E%3Crect fill='%23ff7372' x='10' y='20' width='11' height='11'/%3E%3Crect fill='%23ff7674' y='30' width='11' height='11'/%3E%3Crect fill='%23ff7977' x='40' width='11' height='11'/%3E%3Crect fill='%23ff7b79' x='30' y='10' width='11' height='11'/%3E%3Crect fill='%23ff7e7b' x='20' y='20' width='11' height='11'/%3E%3Crect fill='%23ff817e' x='10' y='30' width='11' height='11'/%3E%3Crect fill='%23ff8480' y='40' width='11' height='11'/%3E%3Crect fill='%23ff8783' x='50' width='11' height='11'/%3E%3Crect fill='%23ff8985' x='40' y='10' width='11' height='11'/%3E%3Crect fill='%23ff8c88' x='30' y='20' width='11' height='11'/%3E%3Crect fill='%23ff8f8a' x='20' y='30' width='11' height='11'/%3E%3Crect fill='%23ff918d' x='10' y='40' width='11' height='11'/%3E%3Crect fill='%23ff948f' y='50' width='11' height='11'/%3E%3Crect fill='%23ff9792' x='60' width='11' height='11'/%3E%3Crect fill='%23ff9994' x='50' y='10' width='11' height='11'/%3E%3Crect fill='%23ff9c97' x='40' y='20' width='11' height='11'/%3E%3Crect fill='%23ff9e99' x='30' y='30' width='11' height='11'/%3E%3Crect fill='%23ffa19c' x='20' y='40' width='11' height='11'/%3E%3Crect fill='%23ffa39e' x='10' y='50' width='11' height='11'/%3E%3Crect fill='%23ffa6a1' x='70' width='11' height='11'/%3E%3Crect fill='%23ffa9a3' x='60' y='10' width='11' height='11'/%3E%3Crect fill='%23ffaba6' x='50' y='20' width='11' height='11'/%3E%3Crect fill='%23ffaea8' x='40' y='30' width='11' height='11'/%3E%3Crect fill='%23ffb0ab' x='30' y='40' width='11' height='11'/%3E%3Crect fill='%23ffb3ad' x='20' y='50' width='11' height='11'/%3E%3Crect fill='%23ffb5b0' x='80' width='11' height='11'/%3E%3Crect fill='%23ffb8b3' x='70' y='10' width='11' height='11'/%3E%3Crect fill='%23ffbab5' x='60' y='20' width='11' height='11'/%3E%3Crect fill='%23ffbdb8' x='50' y='30' width='11' height='11'/%3E%3Crect fill='%23ffbfba' x='40' y='40' width='11' height='11'/%3E%3Crect fill='%23ffc2bd' x='30' y='50' width='11' height='11'/%3E%3Crect fill='%23ffc4c0' x='90' width='11' height='11'/%3E%3Crect fill='%23ffc7c2' x='80' y='10' width='11' height='11'/%3E%3Crect fill='%23ffc9c5' x='70' y='20' width='11' height='11'/%3E%3Crect fill='%23ffccc7' x='60' y='30' width='11' height='11'/%3E%3Crect fill='%23ffceca' x='50' y='40' width='11' height='11'/%3E%3Crect fill='%23ffd0cd' x='40' y='50' width='11' height='11'/%3E%3Crect fill='%23ffd3cf' x='90' y='10' width='11' height='11'/%3E%3Crect fill='%23ffd5d2' x='80' y='20' width='11' height='11'/%3E%3Crect fill='%23fed8d5' x='70' y='30' width='11' height='11'/%3E%3Crect fill='%23fddad7' x='60' y='40' width='11' height='11'/%3E%3Crect fill='%23fdddda' x='50' y='50' width='11' height='11'/%3E%3Crect fill='%23fcdfdd' x='90' y='20' width='11' height='11'/%3E%3Crect fill='%23fce2df' x='80' y='30' width='11' height='11'/%3E%3Crect fill='%23fbe4e2' x='70' y='40' width='11' height='11'/%3E%3Crect fill='%23fae6e5' x='60' y='50' width='11' height='11'/%3E%3Crect fill='%23f9e9e7' x='90' y='30' width='11' height='11'/%3E%3Crect fill='%23f9ebea' x='80' y='40' width='11' height='11'/%3E%3Crect fill='%23f8eeed' x='70' y='50' width='11' height='11'/%3E%3Crect fill='%23f7f0f0' x='90' y='40' width='11' height='11'/%3E%3Crect fill='%23f6f3f2' x='80' y='50' width='11' height='11'/%3E%3Crect fill='%23F5F5F5' x='90' y='50' width='11' height='11'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  overflow: hidden !important;
`;

export const RepoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RepoFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.color.secondary};
  border-radius: 6px;
  border: 2px solid ${(props) => props.theme.color.fourth};
  height: 70vh;
  max-width: 800px;
  min-width: 600px;
  margin-top: 4rem;
  padding: 0 1rem 0 1rem;
  box-shadow: -1px 7px 5px -2px rgba(0, 0, 0, 0.26);
  -webkit-box-shadow: -1px 7px 5px -2px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: -1px 7px 5px -2px rgba(0, 0, 0, 0.26);
  z-index: 10;
`;

export const FrameHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3px 6px 3px 6px;
  max-height: 3rem;
`;

export const FrameMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3px 6px 3px 6px;
  height: 100%;
  border: 1px solid ${(props) => props.theme.color.fourth};
  border-radius: 12px;
  background-color: ${(props) => props.theme.color.primary};
`;

export const FrameBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 3px 6px 3px 6px;
`;

export const RepoTitle = styled.span`
  font-size: ${(props) => props.theme.size.lg};
  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: 700;
`;

export const RepoWrapperItem = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.color.secondary};
  padding: 4px;
  border-radius: 3px;
  min-height: 26px;
  margin-top: 5px;
  border-left: 6px solid ${(props) => props.theme.color.tertiary};
`;

export const RepoDescription = styled.span`
  font-size: ${(props) => props.theme.size.md};
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.primary};
  font-weight: 400;
`;

export const BackIcon = styled(ArrowBackCircle)`
  color: ${(props) => props.theme.color.tertiary};
  width: 40px;
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.primary};
  }
`;

export const Spinner = styled.div`
  width: 90px;
  height: 90px;
  border: 8px solid ${(props) => props.theme.color.primary};
  border-top: 8px solid white;
  border-radius: 50%;
  transition-property: transform;
  animation-name: ${rotate};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  align-self: center;
  justify-self: center;
  margin-top: 30vh;
`;
