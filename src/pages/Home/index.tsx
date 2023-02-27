import { useQuery } from 'react-query';
import axios from 'axios';

import { Header } from '../../components/Header';
import { Container, FlexCol, } from '../../Layout';
import { UserTime } from '../../types';
import { DateTime } from '../../components/DateTime';
import { Loader } from '../../components/Loader';
import { HomeContent, HomeTitleText, HomeWelcomeText } from './styles';
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';
import { FirstCard, SecondCard, ThirdCard } from './Cards';
import { SecundaryText } from '../../Layout/text';

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

          <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
            <img src="/fire.png" style={{ width: '8%', marginLeft: '70%' }} />
          </ParallaxLayer>

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
                <img src={'/programming.png'} />
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingLeft: '12px',
                  marginTop: '-28px'
                }}>
                  <HomeWelcomeText>Welcome!</HomeWelcomeText>
                  <HomeTitleText>My name is <HomeTitleText style={{ color: '#FF5A5F' }}>Eduardo Sohne </HomeTitleText>
                    and I'm a <HomeTitleText style={{ color: '#ffc55a' }}>javascript </HomeTitleText>fullstack developer. Most of my experience is at the front-end and already worked with a lot of features like  
                    <HomeTitleText style={{ color: '#087E8B' }}> typescript</HomeTitleText>, vanilla js and also with 
                    <HomeTitleText style={{ color: '#42B983' }}> vue </HomeTitleText>and 
                    <HomeTitleText style={{ color: '#59d3e1' }}> react</HomeTitleText>.</HomeTitleText>
                </div>
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

              <img src={'/light-bulb.png'} />
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

              <img src={'/binary-code.png'} />
            </ThirdCard>
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
            <img src={'/shuttle.png'} style={{ width: '30%' }} />
          </ParallaxLayer>
        </Parallax>
      </div>
      {/* <HomeContent>
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
