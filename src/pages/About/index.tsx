import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import { Header } from '../../components/Header';
import {
    AboutContainer,
    AboutMenuButton,
    BarSkills,
    BarSkillsContainer,
    BarSkillsInnerContainer,
    BriefcaseIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    ItemDescription,
    ItemText,
    ItemTitle,
    MenuContainer,
    NameTitle,
    PersonListIcon,
    ReponsiveBox,
    ScreenCentralized,
    SectionTitle,
    UserImage,
} from './styles';
import { Myself } from '../../types';
import { FlexCol, FlexRow } from '../../Layout';
import { SecundaryText } from '../../Layout/text';
import { Loader } from '../../components/Loader';

interface AboutMenuProps {
    id: number;
    name: string;
    text?: string;
    subtext?: string;
    jobs?: Record<string, string | number>[];
    icon?: JSX.Element;
}

export function About() {

    const { data: user, isFetching: isFetchingUser } = useQuery<Myself>(
        'user',
        async () => {
            const response = await axios.get('https://api.github.com/users/dudusohne');
            return response.data;
        },
        { staleTime: 4000 * 60 }
    );

    const menus: AboutMenuProps[] = [
        {
            id: 0,
            name: 'Resume',
            icon: <PersonListIcon />,
            text: 'As a software engineer, my expertise primarily lies in JavaScript, with extensive experience in TypeScript, React, and Vue.js.',
            subtext: 'I also have proficiency in Python and Django for backend development and a basic understanding of MySQL for database management.Additionally, I have a foundational knowledge of AWS, Firebase, and Supabase for cloud services.'
        },
        {
            id: 1,
            name: 'Experiences',
            icon: <BriefcaseIcon />,
            jobs: [
                {
                    id: 0,
                    title: 'Web Developer | Smart Marketing Digital Março de 2021 até Novembro de 2021',
                    description: 'Desenvolvimento de landing pages/sites e algumas experiências em React Native.'
                },
                {
                    id: 1,
                    title: 'FullStack Developer | Simbiose Ventures Novembro de 2021 até Outubro de 2022',
                    description: 'Front-end com vanilla js, vue 3 (composition api e setup script). Back - end com python no django. Trabalhando em um projeto grande criando diversoscomponentes e funcionalidades dinâmicas, usando todos recursos do Vue e javascript para construir uma ferramenta escalável e multi- plataforma'
                },
                {
                    id: 2,
                    title: 'Frontend Developer | Super Ensino Outubro de 2022 até o present',
                    description: 'Desenvolvimento web e mobile, utilizando todo eco-sistema do React/React Native pra construir apps atuais, rápidos e escaláveis.'
                },
            ]
        }
    ]

    const [menu, setMenu] = useState<AboutMenuProps | undefined>(menus[0])

    const handleMenuSelect = (menuSelected: AboutMenuProps) => {
        if (menuSelected.id === menu?.id) {
            setMenu(undefined)
        } else {
            setMenu(menuSelected);
        }
    }

    return (
        <AboutContainer>
            <Header />
            {!isFetchingUser ?
                <ReponsiveBox>
                    <BarSkillsContainer>
                        <UserImage src={user?.avatar_url} alt="avatar" />
                        <FlexCol style={{ rowGap: '8px' }}>
                            <NameTitle>Eduardo Sohne</NameTitle>
                            <SecundaryText>Software Engineer</SecundaryText>
                            <SecundaryText style={{ opacity: '0.7' }}>Gramado/RS</SecundaryText>
                            <SecundaryText style={{ opacity: '0.5' }}>32y</SecundaryText>
                        </FlexCol>
                        <BarSkillsInnerContainer>
                            <BarSkills style={{ color: '#FF5A5F' }}>Already worked w/</BarSkills>
                            <BarSkills>Javascript</BarSkills>
                            <BarSkills>Typescript</BarSkills>
                            <BarSkills>React.js</BarSkills>
                            <BarSkills>Next.js</BarSkills>
                            <BarSkills>Vue 3</BarSkills>
                            <BarSkills>Nuxt</BarSkills>
                            <BarSkills>Html/css/sass</BarSkills>
                            <BarSkills>Firebase / faunadb</BarSkills>
                            <BarSkills>React Native</BarSkills>
                            <BarSkills>Expo</BarSkills>
                            <BarSkills>Python</BarSkills>
                            <BarSkills>Django</BarSkills>
                        </BarSkillsInnerContainer>

                    </BarSkillsContainer>

                    <FlexCol style={{ padding: '16px', width: '100%', alignSelf: 'flex-start' }}>
                        {menus.map((item: AboutMenuProps, index: number) =>
                            <MenuContainer>
                                <AboutMenuButton onClick={() => handleMenuSelect(item)}>
                                    <FlexRow style={{ columnGap: '16px' }}>
                                        {item.icon}
                                        <SectionTitle>{item.name}</SectionTitle>
                                    </FlexRow>
                                    {menu?.id === item.id ?
                                        <ChevronUpIcon /> :
                                        <ChevronDownIcon />
                                    }
                                </AboutMenuButton>
                                {menu?.id === item.id && item?.text &&
                                    <ItemText>
                                        {item.text}
                                    </ItemText>
                                }
                                {menu?.id === item.id && item?.jobs &&
                                    <>
                                        {item?.jobs?.map((jobs: any, index: number) =>
                                            <FlexCol key={index}>
                                                <ItemTitle>
                                                    {jobs.title}
                                                </ItemTitle>
                                                <ItemDescription>
                                                    {jobs.description}
                                                </ItemDescription>
                                            </FlexCol>
                                        )}
                                    </>
                                }
                            </MenuContainer>
                        )}
                    </FlexCol>
                </ReponsiveBox> :
                <ScreenCentralized>
                    <Loader />
                </ScreenCentralized>
            }
        </AboutContainer>
    );
}
