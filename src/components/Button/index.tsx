import { ButtonContainer, ButtonLabel } from "./styles"

interface ButtonProps {
    label?: string
    labelColor?: string
    buttonColor?: string
    onClickButton?: () => void
}

export function Button({ label, labelColor, buttonColor, onClickButton }: ButtonProps) {

    return (
        <ButtonContainer style={{ backgroundColor: buttonColor ? buttonColor : '#087E8B' }} onClick={onClickButton}>
            <ButtonLabel style={{ color: labelColor ? labelColor : '#fff' }}>{label}</ButtonLabel>
        </ButtonContainer>
    )
}