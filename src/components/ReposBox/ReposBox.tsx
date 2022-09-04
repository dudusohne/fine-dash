import { Box, BoxDescription, BoxTitle } from "./styles";
import { Repository } from "../../types"

interface BoxProps extends Repository {
    onClickBox: () => void;
}

export function ReposBox({ name, description, homepage, html_url, language, onClickBox }: BoxProps) {
    return (
        <Box onClick={onClickBox}>
            <BoxTitle>{name}</BoxTitle>
            <BoxDescription>{description}</BoxDescription>
            <BoxDescription>{homepage}</BoxDescription>
            <BoxDescription>{html_url}</BoxDescription>
            <BoxDescription>{language}</BoxDescription>
        </Box>
    )
}