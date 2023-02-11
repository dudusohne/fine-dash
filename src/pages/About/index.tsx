import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import { HomeContent } from "../Home/styles";

export function About() {

    return (
        <Layout>
            <Header />
            <HomeContent>
                about page
            </HomeContent>
        </Layout>
    )
}