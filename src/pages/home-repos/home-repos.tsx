import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { Repository } from '../../types'
import { Header } from '../../components/Header'
import { ReposBox } from '../../components/ReposBox'
import { HomeReposContainer, ReposWrapper } from './styles'

export function HomeRepos() {
    const { data, isFetching } = useQuery<Repository[]>('repos', async () => {
        const response = await axios.get('https://api.github.com/users/dudusohne/repos')
        console.log(response.data)
        return response.data;
    }, {
        staleTime: 1000 * 60 // 1 minute
    })

    const navigate = useNavigate()

    return (
        <HomeReposContainer>
            <Header />
            <ReposWrapper>
                {isFetching && <p>Carregando...</p>}
                {data?.map(repo => {
                    return (
                        <ReposBox name={repo.name} description={repo.description} onClickBox={() => navigate(`/${repo.name}`)} />
                    )
                })}
            </ReposWrapper>
        </HomeReposContainer>
    )
}