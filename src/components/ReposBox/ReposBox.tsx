import { BottomContainer, Box, BoxDescription, BoxInfo, BoxTitle } from "./styles";
import { Repository } from "../../types"
import { Link } from "react-router-dom";

interface BoxProps extends Repository {
    onClickBox: () => void;
}

export function ReposBox({ name, description, homepage, html_url, language, onClickBox, id, created_at }: BoxProps) {
    return (
        <Box onClick={onClickBox}>
            <BoxTitle>{name}</BoxTitle>
            <BoxDescription>{description}</BoxDescription>
            <BottomContainer>
                <BoxInfo>
                    <>
                        Created: {created_at}
                    </>
                </BoxInfo>
                <BoxInfo>ID: {id}</BoxInfo>
                <BoxInfo>{homepage}</BoxInfo>
                <BoxDescription>{language}</BoxDescription>
            </BottomContainer>
        </Box>
    )
}