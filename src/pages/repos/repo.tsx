import { useParams } from "react-router-dom";
import { RepoPageContainer } from "./styles";

export function Repo() {
    const params = useParams()
    const currentrepository = params['*'] as string;

    return (
        <RepoPageContainer>
            <h1>{currentrepository}</h1>
        </RepoPageContainer>

    )
}