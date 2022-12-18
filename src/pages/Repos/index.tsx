import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

// import { BackIcon, FrameBottom, FrameHeader, FrameMiddle, RepoContainer, RepoDescription, RepoFrame, RepoPage, RepoTitle, RepoWrapperItem, Spinner } from "./styles.ts";
import { Header } from "../../components/Header";
import { Repository } from "../../types";

export function Repo() {
    const params = useParams()
    const currentrepository = params['*'] as string;

    const { data: repo, isFetching } = useQuery<Repository>('repo', async () => {
        const response = await axios.get(`https://api.github.com/repos/dudusohne/${currentrepository}`)
        return response.data;
    })

    const navigate = useNavigate()

    return (
        <RepoPage>
            <Header />
            <RepoContainer>
                {!isFetching ?
                    <RepoFrame>
                        <FrameHeader>
                            <RepoTitle>{repo?.name}</RepoTitle>
                            <BackIcon onClick={() => navigate(-1)} />
                        </FrameHeader>
                        <FrameMiddle>
                            <RepoWrapperItem>
                                <RepoDescription>{repo?.description}</RepoDescription>
                            </RepoWrapperItem>
                            <RepoWrapperItem>
                                <RepoDescription>{repo?.homepage}</RepoDescription>
                            </RepoWrapperItem>
                            <RepoWrapperItem>
                                <RepoDescription>{repo?.html_url}</RepoDescription>
                            </RepoWrapperItem>
                            <RepoWrapperItem>
                                <RepoDescription>{repo?.created_at}</RepoDescription>
                            </RepoWrapperItem>
                        </FrameMiddle>
                        <FrameBottom>
                            <RepoDescription>ID: {repo?.id}</RepoDescription>
                        </FrameBottom>
                    </RepoFrame>
                    :
                    <Spinner />
                }
            </RepoContainer>
        </RepoPage>
    )
}