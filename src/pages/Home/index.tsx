import { useQuery } from 'react-query';
import axios from 'axios';

import { Header } from '../../components/Header';
import { Container, } from '../../Layout';
import { UserTime } from '../../types';
import { DateTime } from '../../components/DateTime';
import { Loader } from '../../components/Loader';
import { HomeContent, HomeTitleText } from './styles';

export function Home() {
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
      <HomeContent>
        {!isFetchingTime ? <DateTime time={userTime} /> : <Loader />}
        <div style={{ paddingInline: '8px' }}>
          <HomeTitleText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quo perferendis recusandae. Commodi inventore asperiores blanditiis, alias nihil atque non libero. Nostrum porro, commodi eos corrupti quidem possimus sit reiciendis.</HomeTitleText>
        </div>
      </HomeContent>
    </Container>
  );
}
