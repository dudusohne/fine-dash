import { Box, BoxDescription, BoxTitle } from "./styles";
import { Repository } from "../../types"

export function ReposBox({ name, description, homepage, html_url, language }: Repository) {
    return (
        <Box>
            <BoxTitle>{name}</BoxTitle>
            <BoxDescription>{description}</BoxDescription>
            <p>{homepage}</p>
            <p>{html_url}</p>
            <p>{language}</p>
        </Box>
    )
}