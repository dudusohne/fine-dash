import axios from 'axios'
import { useQuery } from 'react-query'
import { Myself } from '../../types'
import { HeaderWrapper, UserImage, UserName } from './styles'
import { MenuButton } from '../MenuButton'
import { NavLink, useLocation } from "react-router-dom";



export function Header() {
    const { data: user } = useQuery<Myself>('user', async () => {
        const response = await axios.get('https://api.github.com/users/dudusohne')
        return response.data;
    }, {
        staleTime: 3000 * 60 // 3 minutes
    })

    const location = useLocation();

    console.log(location.pathname)

    return (
        <HeaderWrapper>
            <NavLink to={'repositories'}>
                <MenuButton wich="github" active={location.pathname === '/repositories'} />
            </NavLink>
            <NavLink to={'/'}>
                <MenuButton wich="home" active={location.pathname === '/'} />
            </NavLink>
            <>
                <UserName>{user?.name}</UserName>
                <UserImage src={user?.avatar_url} alt="avatar" />
            </>
        </HeaderWrapper>
    )
}