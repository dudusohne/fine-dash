import { animated } from "@react-spring/web";
import styled from "styled-components";

export const TimeContainer = styled(animated.div)`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;

    width: 300px;
    height: 100px;
    border-radius: 8px;
    border: 2px solid ${props => props.theme.color.greyLight};
    padding: 6px;
`