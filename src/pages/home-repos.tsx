import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'

import { Repository } from '../types'
import { Header } from '../components/Header'
import { ReposBox } from '../components/ReposBox'

export function HomeRepos() {
    const { data, isFetching } = useQuery<Repository[]>('repos', async () => {
        const response = await axios.get('https://api.github.com/users/dudusohne/repos')
        console.log(response.data)
        return response.data;
    }, {
        staleTime: 1000 * 60 // 1 minute
    })

    return (
        <div>
            <Header />
            {isFetching && <p>Carregando...</p>}
            {data?.map(repo => {
                return (
                    <ReposBox name={repo.name} description={repo.description} />
                )
            })}
        </div>
    )
}