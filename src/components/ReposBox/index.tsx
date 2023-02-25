import {
  BottomContainer,
  Box,
  BoxDescription,
  BoxInfo,
  BoxTitle,
  Divider,
} from './styles';
import { LanguageChip, LanguageText } from './components/LanguageChip/styles';
import { LinkChip, LinkText } from './components/LinkChip/styles';
import { Repository } from '../../types';

interface BoxProps extends Repository {
  onClickBox?: () => void;
}

export function ReposBox({
  name,
  description,
  homepage,
  language,
  onClickBox,
  id,
  created_at,
}: BoxProps) {
  return (
    <Box onClick={onClickBox}>
      <BoxTitle>{name}</BoxTitle>
      {description && (
        <>
          <Divider />
          <BoxDescription>{description}</BoxDescription>
        </>
      )}
      <Divider />
      <BottomContainer>
        <BoxInfo>
          <>Created: {created_at}</>
        </BoxInfo>
        <BoxInfo>ID: {id}</BoxInfo>
      </BottomContainer>
      {homepage && (
        <LinkChip>
          <LinkText>{homepage}</LinkText>
        </LinkChip>
      )}
      {language && (
        <LanguageChip>
          <LanguageText>{language}</LanguageText>
        </LanguageChip>
      )}
    </Box>
  );
}
