import { useNavigate } from 'react-router-dom';
import {
  AboutIcon,
  GithubIcon,
  HomeIcon,
  MenuButtonContainer,
} from './styles';
import { animated, useSpring } from '@react-spring/web';

interface MenuProps {
  label?: string;
  active?: boolean;
  pathname?: string;
  springs?: any;
}

export function MenuButton({ label, active, pathname }: MenuProps) {
  const navigate = useNavigate();

  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <animated.div
      style={{
        display: 'flex',
        flexDirection: 'column',
        ...springs,
        zIndex: 20,
      }}
      onClick={() => navigate(`${pathname}`)}
    >
      <MenuButtonContainer isactive={active ?? false}>
        {label === 'home' && <HomeIcon isactive={active ?? false} />}
        {label === 'github' && <GithubIcon isactive={active ?? false} />}
        {label === 'about' && <AboutIcon isactive={active ?? false} />}
      </MenuButtonContainer>
    </animated.div>
  );
}
