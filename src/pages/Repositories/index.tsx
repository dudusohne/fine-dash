import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { Repository } from '../../types'
import { Header } from '../../components/Header'
import { ReposBox } from '../../components/ReposBox'
import { HomeReposContainer, ReposWrapper, Spinner } from './styles'

export function Repositories() {
    const { data, isFetching } = useQuery<Repository[]>('repos', async () => {
        const response = await axios.get('https://api.github.com/users/dudusohne/repos')
        return response.data;
    }, {
        staleTime: 1000 * 60 // 1 minute
    })

    const navigate = useNavigate()

    return (
        <HomeReposContainer>
            <Header />
            <ReposWrapper>
                {isFetching ? <Spinner /> :
                    <>
                        {data?.map(repo => {
                            return (
                                <ReposBox
                                    key={repo.id}
                                    id={repo.id}
                                    name={repo.name}
                                    description={repo.description}
                                    onClickBox={() => navigate(`repos/${repo.name}`, {})}
                                    created_at={repo.created_at}
                                    homepage={repo.homepage}
                                    language={repo.language}
                                />
                            )
                        })}
                    </>
                }
            </ReposWrapper>
        </HomeReposContainer>
    )
}