import axios from 'axios'
import { NavLink, useLocation } from "react-router-dom";
import { useQuery } from 'react-query'

import { Myself } from '../../types'
import { MenuButton } from '../MenuButton'
import { HeaderWrapper, PathnameContainer, PathnameTitle, UserImage, UserName } from './styles'
import { FlexRow } from '../Layout';

export function Header() {
    const { data: user } = useQuery<Myself>('user', async () => {
        const response = await axios.get('https://api.github.com/users/dudusohne')
        return response.data;
    }, {
        staleTime: 4000 * 60 // 4 minutes
    })

    const location = useLocation();

    //TODO: remove this later
    console.log(location.pathname)

    function handlePathName(path: string) {
        if (path === '/repositories') {
            return 'REPOSITÓRIOS DO GITHUB'
        }

        if (path === '/') {
            return 'HOME'
        }
    }

    return (
        <HeaderWrapper>
            <FlexRow style={{ columnGap: '8px' }}>
                <NavLink to={'repositories'}>
                    <MenuButton wich="github" active={location.pathname === '/repositories'} />
                </NavLink>
                <NavLink to={'/'}>
                    <MenuButton wich="home" active={location.pathname === '/'} />
                </NavLink>
            </FlexRow>
            <PathnameContainer>
                <PathnameTitle>{handlePathName(location.pathname)}</PathnameTitle>
            </PathnameContainer>
            <FlexRow>
                <UserName>{user?.name}</UserName>
                <UserImage src={user?.avatar_url} alt="avatar" />
            </FlexRow>
        </HeaderWrapper>
    )
}