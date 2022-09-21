import axios from 'axios'
import { useQuery } from 'react-query'
import { Myself } from '../../types'
import { HeaderWrapper, UserImage, UserName } from './styles'

export function Header() {
    const { data: user } = useQuery<Myself>('user', async () => {
        const response = await axios.get('https://api.github.com/users/dudusohne')
        return response.data;
    }, {
        staleTime: 3000 * 60 // 3 minutes
    })

    return (
        <HeaderWrapper>
            <UserName>{user?.name}</UserName>
            <UserImage src={user?.avatar_url} alt="avatar" />
        </HeaderWrapper>
    )
}