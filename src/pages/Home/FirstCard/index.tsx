import { FlexCol } from "../../../Layout";
import { FirstCardContainer } from "./styles";

export function FirstCard({ children }: any) {

    return (
        <FirstCardContainer>
            {children}
        </FirstCardContainer>
    )
}