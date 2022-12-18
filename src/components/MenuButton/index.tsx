import { GithubIcon, IconTitle, MenuButtonContainer } from "./styles";

interface MenuProps {
    wich?: string;
    active?: boolean;
}

export function MenuButton({ wich, active }: MenuProps) {

    return (
        <MenuButtonContainer isActive={active ?? false}>
            {wich === "github" &&
                <>
                    <GithubIcon />
                    <IconTitle>GITHUB</IconTitle>
                </>
            }
            {wich === "home" &&
                <>
                    <GithubIcon />
                    <IconTitle>GITHUB</IconTitle>
                </>
            }
        </MenuButtonContainer>
    )
}