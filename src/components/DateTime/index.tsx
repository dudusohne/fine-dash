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
            <p>You from: {time.timezone}</p>
            <p>Week day: {time.day_of_week}</p>
        </TimeContainer>
    )
}