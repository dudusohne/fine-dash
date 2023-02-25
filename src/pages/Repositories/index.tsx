import { useQuery } from 'react-query';
import axios from 'axios';

import { Header } from '../../components/Header';
import { ReposBox } from '../../components/ReposBox';
import { Layout, Spinner } from '../../Layout';
import { Repository } from '../../types';
import { ReposWrapper } from './styles';

export function Repositories() {
  const { data, isFetching } = useQuery<Repository[]>(
    'repos',
    async () => {
      const response = await axios.get(
        'https://api.github.com/users/dudusohne/repos'
      );
      return response.data;
    },
    {
      staleTime: 1000 * 60, // 1 minute
    }
  );

  return (
    <Layout>
      <Header />
      <ReposWrapper>
        {isFetching ? (
          <Spinner />
        ) : (
          <>
            {data?.map((repo: Repository) => {
              return (
                <ReposBox
                  key={repo.id}
                  id={repo.id}
                  name={repo.name}
                  description={repo.description}
                  created_at={repo.created_at}
                  homepage={repo.homepage}
                  language={repo.language}
                />
              );
            })}
          </>
        )}
      </ReposWrapper>
    </Layout>
  );
}
