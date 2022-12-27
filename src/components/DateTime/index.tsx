import { UserTime } from "../../types";
import { TimeContainer } from "./styles";

interface UserDateTime {
    time: UserTime
}

export function DateTime({ time }: UserDateTime) {

    const date = new Date(time.datetime ?? '')

    return (
        <TimeContainer>
            <p>{date.toLocaleTimeString()}</p>
        </TimeContainer>
    )
}