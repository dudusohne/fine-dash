import { useQuery } from 'react-query';
import axios from 'axios';

import { Header } from '../../components/Header';
import { Container, FlexCol, } from '../../Layout';
import { UserTime } from '../../types';
import { DateTime } from '../../components/DateTime';
import { Loader } from '../../components/Loader';
import { HomeContent, HomeTitleText } from './styles';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';

// Little helpers ...
const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export function Home() {
  const parallax = useRef<IParallax>(null!)

  const { data: userTime, isFetching: isFetchingTime } = useQuery<UserTime>(
    'user-time',
    async () => {
      const res = await axios.get('http://worldtimeapi.org/api/ip');
      return res.data;
    },
    {
      staleTime: 1000,
      refetchOnWindowFocus: true,
    }
  );

  return (
    <Container>
      <Header />
      <div style={{ width: '100%', height: '94.3vh', background: '#3C3C3C' }}>
        <Parallax ref={parallax} pages={3}>
          <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#FF5A5F' }} />
          <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#59d3e1' }} />

          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url('stars', true),
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
            <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
            <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%', color: 'red' }} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.5}
            speed={-0.4}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}>
            <img src={url('earth')} style={{ width: '60%' }} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: '80%',
              backgroundPosition: 'center',
              backgroundImage: url('clients', true),
            }}
          />

          <ParallaxLayer
            offset={0}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(1)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <img src={url('server')} style={{ width: '20%' }} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            onClick={() => parallax.current.scrollTo(2)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <img src={url('bash')} style={{ width: '40%' }} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => parallax.current.scrollTo(0)}>
            <img src={url('clients-main')} style={{ width: '40%' }} />
          </ParallaxLayer>
        </Parallax>
      </div>
      {/* <HomeContent>
        <>
          {!isFetchingTime && userTime?.datetime ?
            <>
              {userTime?.datetime.length ?
                <DateTime time={userTime} />
                : null}
            </>
            : <Loader />}
        </>
        <div style={{ paddingInline: '8px' }}>
          <HomeTitleText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quo perferendis recusandae. Commodi inventore asperiores blanditiis, alias nihil atque non libero. Nostrum porro, commodi eos corrupti quidem possimus sit reiciendis.</HomeTitleText>
        </div>
      </HomeContent>
      <FlexCol style={{ paddingInline: '8px' }}>
        <HomeTitleText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quo perferendis recusandae. Commodi inventore asperiores blanditiis, alias nihil atque non libero. Nostrum porro, commodi eos corrupti quidem possimus sit reiciendis.</HomeTitleText>
      </FlexCol> */}
    </Container>
  );
}
