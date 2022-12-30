import { useState } from "react";
import { useQuery } from "react-query";
import { animated, useSpring } from "@react-spring/web";
import axios from 'axios';

import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import { UserTime } from "../../types";
import { DateTime } from "../../components/DateTime";
import { Loader } from "../../components/Loader";
import { HomeContent } from "./styles";

export function Home() {
    const [userTime, setUserTime] = useState<UserTime>({})

    const { isFetching: isFetchingTime } = useQuery('user-time', async () => {
        const res = await axios.get('http://worldtimeapi.org/api/ip')
        setUserTime(res.data)
    })

    return (
        <Layout>
            <Header />
            <HomeContent>
                {!isFetchingTime ?
                    <DateTime time={userTime} />
                    : <Loader marginLeft="30rem" />
                }
            </HomeContent>
        </Layout>
    )
}