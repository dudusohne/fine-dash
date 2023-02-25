import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';

import { Myself } from '../../types';
import { MenuButton } from '../MenuButton';
import {
  HeaderWrapper,
  JobTitle,
  PathnameContainer,
  PathnameTitle,
  UserImage,
  UserName,
} from './styles';
import { FlexCol, FlexRow } from '../../Layout';
import { useSpring } from '@react-spring/web';
import { LanguageChip } from '../ReposBox/components/LanguageChip/styles';
import { Loader } from '../Loader';

export function Header() {
  const { data: user, isFetching: isFetchingUser } = useQuery<Myself>(
    'user',
    async () => {
      const response = await axios.get(
        'https://api.github.com/users/dudusohne'
      );
      return response.data;
    },
    {
      staleTime: 4000 * 60, // 4 minutes
    }
  );

  const location = useLocation();

  function handlePathName(path: string) {
    if (path === '/repositories') {
      return 'GITHUB REPOSITORIES';
    }

    if (path === '/') {
      return 'HOME';
    }

    if (path === '/about') {
      return 'ABOUT ME';
    }
  }

  const slideAnimation = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  });

  const slideAnimationFromFullLeft = useSpring({
    from: { x: -1000 },
    to: { x: 0 },
  });

  const slideAnimationFromTop = useSpring({
    from: { y: -100 },
    to: { y: 0 },
  });

  return (
    <HeaderWrapper>
      <FlexRow style={{ columnGap: '8px', alignItems: 'center' }}>
        <MenuButton
          label="github"
          pathname="/repositories"
          active={location.pathname === '/repositories'}
          springs={slideAnimation}
        />
        <MenuButton
          label="home"
          pathname="/"
          active={location.pathname === '/'}
          springs={slideAnimation}
        />
        <MenuButton
          label="about"
          pathname="/about"
          active={location.pathname === '/about'}
          springs={slideAnimation}
        />
      </FlexRow>
      <PathnameContainer style={{ ...slideAnimationFromFullLeft }}>
        <PathnameTitle>{handlePathName(location.pathname)}</PathnameTitle>
      </PathnameContainer>
      {!isFetchingUser ? (
        <FlexRow
          style={{ alignItems: 'center', marginTop: '1rem' }}
        >
          <FlexCol style={{ alignItems: 'center' }}>
            <UserName>{user?.name}</UserName>
            <LanguageChip
              style={{
                marginTop: '0',
                justifyContent: 'center',
                ...slideAnimationFromTop,
              }}
            >
              <JobTitle>DEVELOPER</JobTitle>
            </LanguageChip>
          </FlexCol>
          <UserImage src={user?.avatar_url} alt="avatar" />
        </FlexRow>
      ) : (
        <Loader width="40px" height="40px" />
      )}
    </HeaderWrapper>
  );
}
