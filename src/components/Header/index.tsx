import axios from 'axios'
import { NavLink, useLocation } from "react-router-dom";
import { useQuery } from 'react-query'

import { Myself } from '../../types'
import { MenuButton } from '../MenuButton'
import { HeaderWrapper, PathnameContainer, PathnameTitle, UserImage, UserName } from './styles'
import { FlexRow } from '../Layout';

export function Header() {
    const { data: user, isFetching: isFetchingUser } = useQuery<Myself>('user', async () => {
        const response = await axios.get('https://api.github.com/users/dudusohne')
        return response.data;
    }, {
        staleTime: 4000 * 60 // 4 minutes
    })

    const location = useLocation();

    function handlePathName(path: string) {
        if (path === '/repositories') {
            return 'GITHUB REPOSITORIES'
        }

        if (path === '/') {
            return 'HOME'
        }
    }

    return (
        <HeaderWrapper>
            <FlexRow style={{ columnGap: '8px', alignItems: 'center' }}>
                <MenuButton label="github" pathname="/repositories" active={location.pathname === '/repositories'} />
                <MenuButton label="home" pathname="/" active={location.pathname === '/'} />
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