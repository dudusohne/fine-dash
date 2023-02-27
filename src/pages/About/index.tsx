import axios from 'axios';
import { Header } from '../../components/Header';
import { AboutBox, AboutContainer, AboutProfileText, AboutProfileTextTwo, AboutProfileTitle, UserImage } from './styles';
import { useQuery } from 'react-query';
import { Myself } from '../../types';
import { Divider, FlexCol, FlexRow } from '../../Layout';
import { SecundaryText } from '../../Layout/text';

export function About() {
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
      <div className="area" >
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
        <AboutBox>
          <UserImage src={user?.avatar_url} alt="avatar" />
          <FlexCol style={{ width: '100%', alignItems: 'flex-start', rowGap: '8px', marginTop: '1rem' }}>
            <FlexRow>
              <AboutProfileTextTwo>Name: </AboutProfileTextTwo>
              <AboutProfileTextTwo style={{ color: '#FF5A5F', marginLeft: '10px' }}>Eduardo Sohne</AboutProfileTextTwo>
            </FlexRow>
            <FlexRow>
              <AboutProfileTextTwo>Living in: </AboutProfileTextTwo>
              <AboutProfileTextTwo style={{ color: '#ffc55a', marginLeft: '10px' }}>Brazil</AboutProfileTextTwo>
            </FlexRow>
            <FlexRow>
              <AboutProfileTextTwo>Working from: </AboutProfileTextTwo>
              <AboutProfileTextTwo style={{ color: '#59d3e1', marginLeft: '10px' }}>Home</AboutProfileTextTwo>
            </FlexRow>
          </FlexCol>
          <Divider style={{ opacity: 0.1, margin: '20px 0px 10px 0px' }} />
          <SecundaryText>Languages/ tools</SecundaryText>
          <FlexRow style={{ columnGap: '10px', marginTop: '10px' }}>
            <img src={'/typescript.png'} style={{ width: '30px' }} />
            <img src={'/javascript.png'} style={{ width: '30px' }} />
            <img src={'/react.png'} style={{ width: '30px' }} />
          </FlexRow>
          <Divider style={{ opacity: 0.1, margin: '20px 0px 10px 0px' }} />
          <SecundaryText>Get in touch with me</SecundaryText>
          <FlexRow style={{ columnGap: '10px', marginTop: '10px' }}>
            <img src={'/instagram.png'} style={{ width: '58px', height: '58px' }} />
            <img src={'/linkedin.png'} style={{ width: '58px', height: '58px' }} />
            <img src={'/mail.png'} style={{ width: '58px', height: '58px' }} />
          </FlexRow>
        </AboutBox>
      </div >
    </AboutContainer>
  );
}
