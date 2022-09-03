import { useFetch } from '../helpers/useFetch'
import { Repository } from '../types'

export function HomePage() {
    const { data: repositories, isFetching } = useFetch<Repository[]>('users/dudusohne')

    return (
        <div>
            {isFetching && <p>Carregando...</p>}
            {repositories?.map(repo => {
                return (
                    <li key={repo.full_name}>
                        <strong>{repo.full_name}</strong>
                        <p>{repo.description}</p>
                    </li>
                )
            })}
        </div>
    )
}