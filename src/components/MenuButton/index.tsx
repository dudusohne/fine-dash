import { GithubIcon, HomeIcon, IconTitle, MenuButtonContainer } from "./styles";

interface MenuProps {
    wich?: string;
    active?: boolean;
}

export function MenuButton({ wich, active }: MenuProps) {

    return (
        <MenuButtonContainer isActive={active ?? false}>
            {wich === "github" &&
                <>
                    <GithubIcon isActive={active ?? false} />
                    <IconTitle isActive={active ?? false}>GITHUB</IconTitle>
                </>
            }
            {wich === "home" &&
                <>
                    <HomeIcon isActive={active ?? false} />
                    <IconTitle isActive={active ?? false}>HOME</IconTitle>
                </>
            }
        </MenuButtonContainer>
    )
}