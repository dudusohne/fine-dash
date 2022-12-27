import { useNavigate } from "react-router-dom";
import { GithubIcon, HomeIcon, IconTitle, MenuButtonContainer } from "./styles";

interface MenuProps {
    label?: string;
    active?: boolean;
    pathname?: string;
}

export function MenuButton({ label, active, pathname }: MenuProps) {
    const navigate = useNavigate()

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }} onClick={() => navigate(`${pathname}`)}>
            <MenuButtonContainer isActive={active ?? false}>
                {label === "github" &&
                    <GithubIcon isActive={active ?? false} />
                }
                {label === "home" &&
                    <HomeIcon isActive={active ?? false} />
                }
            </MenuButtonContainer>
        </div>
    )
}