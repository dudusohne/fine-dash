import { useQuery } from 'react-query';
import axios from 'axios';

import { Header } from '../../components/Header';
import { ReposBox } from '../../components/ReposBox';
import { Container, Spinner } from '../../Layout';
import { Repository } from '../../types';
import { ReposWrapper } from './styles';

export function Repositories() {
  const { data, isFetching } = useQuery<Repository[]>(
    'repos',
    async () => {
      const response = await axios.get(
        'https://api.github.com/users/dudusohne/repos'
      );

      response.data.map((repo: any) => {
        repo.created_at = formatDateComingFromGithub(repo.created_at)
      })

      return response.data;
    },
    {
      staleTime: 5000 * 60, // 5 minutes
    }
  );

  const formatDateComingFromGithub = (date: Date) => {
    const dateFormatter = new Date(date)
    const month = (dateFormatter.getMonth() + 1).toString().padStart(2, '0');
    const hours = dateFormatter.getUTCHours().toString().padStart(2, "0");
    const minutes = dateFormatter.getUTCMinutes().toString().padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;
    const formattedDate = `${dateFormatter.getDate()}/${month}/${dateFormatter.getFullYear()} ${formattedTime}`
    return formattedDate
  }

  return (
    <Container>
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
    </Container>
  );
}
