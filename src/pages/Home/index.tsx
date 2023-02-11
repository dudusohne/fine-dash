import { useQuery } from "react-query";
import axios from 'axios';

import { Header } from "../../components/Header";
import { FlexRow, Layout } from "../../components/Layout";
import { UserTime } from "../../types";
import { DateTime } from "../../components/DateTime";
import { Loader } from "../../components/Loader";
import { HomeContent } from "./styles";

export function Home() {
    const { data: userTime, isFetching: isFetchingTime } = useQuery<UserTime>('user-time', async () => {
        const res = await axios.get('http://worldtimeapi.org/api/ip')
        return res.data
    }, {
        staleTime: 1000,
        refetchOnWindowFocus: true
    })

    return (
        <Layout>
            <Header />
            <HomeContent>
                <FlexRow>
                    {!isFetchingTime ?
                        <DateTime time={userTime} />
                        : <Loader />
                    }
                </FlexRow>
            </HomeContent>
        </Layout>
    )
}