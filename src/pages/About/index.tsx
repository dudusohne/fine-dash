import { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

import { Header } from '../../components/Header';
import {
  AboutBox,
  AboutContainer,
  AboutProfileTextTwo,
  BoxButton,
  InnerBox,
  ReponsiveBox,
  ReponsiveButtonWrapper,
  UserImage,
} from './styles';
import { Myself } from '../../types';
import { Divider, FlexCol, FlexRow } from '../../Layout';
import { SecundaryText } from '../../Layout/text';
import { Vuejs, Reactjs } from '@styled-icons/remix-fill';
import { Javascript } from '@styled-icons/boxicons-logos/Javascript';
import { Python } from '@styled-icons/boxicons-logos/Python';
import { Linkedin } from '@styled-icons/bootstrap/Linkedin';
import { Link } from 'react-router-dom';

export function About() {
  const [cardSelected, setCardSelected] = useState<string>('ME');

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

  return (
    <AboutContainer>
      <Header />
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ReponsiveBox>
          <ReponsiveButtonWrapper>
            <BoxButton
              color="#ffc55a"
              isActive={cardSelected === 'ME'}
              onClick={() => setCardSelected('ME')}
            >
              ME
            </BoxButton>
            <BoxButton
              color="#FF5A5F"
              isActive={cardSelected === 'EXP'}
              onClick={() => setCardSelected('EXP')}
            >
              EXP
            </BoxButton>
            {/* <BoxButton color="#59d3e1" isActive={cardSelected === 'TECH'} onClick={() => setCardSelected('TECH')}>TECH</BoxButton>
            <BoxButton color="#42B983" isActive={cardSelected === 'JOBS'} onClick={() => setCardSelected('JOBS')}>JOBS</BoxButton> */}
          </ReponsiveButtonWrapper>
          {cardSelected === 'ME' ? (
            <>
              <AboutBox color="#ffc55a">
                <UserImage src={user?.avatar_url} alt="avatar" />
                <InnerBox>
                  <FlexCol
                    style={{
                      width: '100%',
                      alignItems: 'flex-start',
                      rowGap: '8px',
                      marginTop: '1rem',
                    }}
                  >
                    <FlexRow>
                      <AboutProfileTextTwo>Name: </AboutProfileTextTwo>
                      <AboutProfileTextTwo
                        style={{ color: '#FF5A5F', marginLeft: '10px' }}
                      >
                        Eduardo Sohne
                      </AboutProfileTextTwo>
                    </FlexRow>
                    <FlexRow>
                      <AboutProfileTextTwo>Living in: </AboutProfileTextTwo>
                      <AboutProfileTextTwo
                        style={{ color: '#ffc55a', marginLeft: '10px' }}
                      >
                        Brazil
                      </AboutProfileTextTwo>
                    </FlexRow>
                    <FlexRow>
                      <AboutProfileTextTwo>Working from: </AboutProfileTextTwo>
                      <AboutProfileTextTwo
                        style={{ color: '#59d3e1', marginLeft: '10px' }}
                      >
                        Home
                      </AboutProfileTextTwo>
                    </FlexRow>
                  </FlexCol>
                  <Divider
                    style={{ opacity: 0.1, margin: '20px 0px 10px 0px' }}
                  />
                  <SecundaryText>Languages/ tools</SecundaryText>
                  <FlexRow
                    style={{
                      columnGap: '10px',
                      marginTop: '10px',
                      width: '100%',
                    }}
                  >
                    <Javascript height="2rem" width="2rem" color="##ffc55a" />
                    <Reactjs height="2rem" width="2rem" color="#59d3e1" />
                    <Vuejs height="2rem" width="2rem" color="#42B983" />
                    <Python height="2rem" width="2rem" color="#42B983" />
                  </FlexRow>
                  <Divider
                    style={{ opacity: 0.1, margin: '20px 0px 10px 0px' }}
                  />
                  <SecundaryText>Get in touch with me</SecundaryText>
                  <FlexRow style={{ columnGap: '10px', marginTop: '10px' }}>
                    <Link
                      to="https://www.linkedin.com/in/eduardo-sohne-62a183118/"
                      target="_blank"
                    >
                      <Linkedin />
                    </Link>
                  </FlexRow>
                </InnerBox>
              </AboutBox>
            </>
          ) : cardSelected === 'EXP' ? (
            <>
              <AboutBox color="#FF5A5F">
                <InnerBox>
                  As a software engineer, my expertise primarily lies in
                  JavaScript, with extensive experience in TypeScript, React,
                  and Vue.js. I also have proficiency in Python and Django for
                  backend development and a basic understanding of MySQL for
                  database management. Additionally, I have a foundational
                  knowledge of AWS, Firebase, and Supabase for cloud services.
                </InnerBox>
              </AboutBox>
            </>
          ) : cardSelected === 'TECH' ? (
            <>
              <AboutBox color="#59d3e1">
                <InnerBox>TECHS</InnerBox>
              </AboutBox>
            </>
          ) : cardSelected === 'JOBS' ? (
            <AboutBox color="#42B983">
              <InnerBox>JOBS</InnerBox>
            </AboutBox>
          ) : null}
        </ReponsiveBox>
      </div>
    </AboutContainer>
  );
}
