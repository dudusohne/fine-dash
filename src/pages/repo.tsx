import { useQueryClient } from "react-query";
import { useParams } from "react-router-dom";

export function Repo() {
    const params = useParams()
    const currentrepository = params['*'] as string;

    return (
        <div>
            <h1>{currentrepository}</h1>
        </div>

    )
}