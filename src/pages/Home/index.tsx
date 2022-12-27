import { useQuery } from "react-query";
import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import axios from 'axios';
import { useState } from "react";
import { UserTime } from "../../types";
import { DateTime } from "../../components/DateTime";
import { Loader } from "../../components/Loader";

export function Home() {
    const [userTime, setUserTime] = useState<UserTime>({})

    const { isFetching: isFetchingTime } = useQuery('user-time', async () => {
        const res = await axios.get('http://worldtimeapi.org/api/ip')
        setUserTime(res.data)
    })

    return (
        <Layout>
            <Header />
            <div className="col-sm-12">
                {!isFetchingTime ?
                    <DateTime time={userTime} />
                    : <Loader marginLeft="30rem" />
                }
            </div>
        </Layout>
    )
}