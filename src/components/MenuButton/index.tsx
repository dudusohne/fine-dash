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
      <MenuButtonContainer isActive={active ?? false}>
        {label === 'home' && <HomeIcon isActive={active ?? false} />}
        {label === 'github' && <GithubIcon isActive={active ?? false} />}
        {label === 'about' && <AboutIcon isActive={active ?? false} />}
      </MenuButtonContainer>
    </animated.div>
  );
}
