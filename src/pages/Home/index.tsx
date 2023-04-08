import { useRef } from 'react';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';

import { Header } from '../../components/Header';
import { Container, Divider, DividerVertical, FlexCol, FlexRow, } from '../../Layout';
import { GithubREPO, HomeTitleBIG, HomeTitleText, HomeWelcomeText, StyledTalk } from './styles';
import { FirstCard, SecondCard, ThirdCard } from './Cards';
import { PrimaryText } from '../../Layout/text';
import Ribbon from '../../components/Svg/Ribbon';
import { ReactLogo } from 'styled-icons/fa-brands';
import { Javascript, Typescript, Vuejs } from 'styled-icons/boxicons-logos';
import { Styledcomponents, Vite } from 'styled-icons/simple-icons';

export function Home() {
  const parallax = useRef<IParallax>(null!)

  return (
    <Container>
      <Header />
      <div style={{ height: '94.3vh', background: '#3C3C3C' }}>
        <Parallax ref={parallax} pages={3}>
          <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#FF5A5F' }} />
          <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#59d3e1' }} />

          <ParallaxLayer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: 'url(https://awv3node-homepage.surge.sh/build/assets/stars.svg)',
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img src={'/cloud.svg'} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
            <img src={'/cloud.svg'} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img src={'/cloud.svg'} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
            <img src={'/cloud.svg'} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img src={'/cloud.svg'} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
            <img src={'/cloud.svg'} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img src={'/cloud.svg'} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
            <img src={'/cloud.svg'} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
            <img src={'/cloud.svg'} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
          </ParallaxLayer>

          <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
            <img src={'/cloud.svg'} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
            <img src={'/cloud.svg'} style={{ display: 'block', width: '15%', marginLeft: '75%', color: 'red' }} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: '80%',
              backgroundPosition: 'center',
              backgroundImage: '/talking.png',
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
            <>
              <FirstCard>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingLeft: '12px',
                  marginTop: '-28px',
                  width: '100%'
                }}>
                  <HomeWelcomeText>Welcome!</HomeWelcomeText>
                  <HomeTitleText>
                    My name is
                    <HomeTitleText style={{ color: '#FF5A5F' }}> Eduardo Sohne </HomeTitleText>
                    and I'm a
                    <HomeTitleText style={{ color: '#ffc55a' }}> javascript </HomeTitleText>
                    fullstack developer.
                    Most of my experience is at the front-end
                    and already worked with a lot of cool things like
                    <HomeTitleText style={{ color: '#087E8B' }}> typescript</HomeTitleText>, vanilla js and also with
                    <HomeTitleText style={{ color: '#42B983' }}> vue </HomeTitleText>and
                    <HomeTitleText style={{ color: '#59d3e1' }}> react</HomeTitleText>.
                  </HomeTitleText>
                </div>
                <Divider color="#ffc55a" style={{ marginTop: '1.2rem' }} />
                <FlexRow style={{ width: '100%', columnGap: '16px', justifyContent: 'flex-end' }}>
                  <Vuejs height="2rem" width="2rem" color="#ffc55a" />
                  <ReactLogo height="2rem" width="2rem" color="#ffc55a" />
                  <Typescript height="2rem" width="2rem" color="#ffc55a" />
                  <Javascript height="2rem" width="2rem" color="#ffc55a" />
                </FlexRow>
              </FirstCard>
            </>
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
            <SecondCard>
              <HomeTitleText>
                I made this app to try out
                some cool features from the
                <HomeTitleBIG style={{ color: '#59d3e1' }}> react </HomeTitleBIG>
                ecosystem as<HomeTitleBIG style={{ color: '#42B983' }}> vite</HomeTitleBIG>,
                fetching and caching data with
                <HomeTitleBIG style={{ color: '#eb726a' }}> react query</HomeTitleBIG>,
                animated things with <HomeTitleBIG style={{ color: '#59d3e1' }}> react spring</HomeTitleBIG>,
                responsivity with <HomeTitleBIG style={{ color: '#eb6a9c' }}>styled-components</HomeTitleBIG> and more.
              </HomeTitleText>
              <Divider color="#42B983" />
              <FlexRow style={{ width: '100%', columnGap: '16px', justifyContent: 'flex-end' }}>
                <Vite height="2rem" width="2rem" color="#42B983" />
                <ReactLogo height="2rem" width="2rem" color="#42B983" />
                <Styledcomponents height="2rem" width="2rem" color="#42B983" />
              </FlexRow>
            </SecondCard>
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
            <ThirdCard>
              <HomeTitleText style={{ color: 'black' }}>
                This app code is <HomeTitleBIG style={{ color: '#da680c' }}> public </HomeTitleBIG>
                and you can go to it in the links below. <HomeTitleText style={{ color: '#c26e29' }}>
                  Besides that you can
                  also send me feedback about this project or just reach me out.
                </HomeTitleText>
              </HomeTitleText>
              {/* <Divider color="#087E8B" /> */}

            </ThirdCard>
          </ParallaxLayer>
        </Parallax>
      </div>
    </Container >
  );
}
