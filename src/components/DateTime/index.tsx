import { useSpring } from '@react-spring/web';
import { UserTime } from '../../types';
import { Divider, FlexCol, FlexRow } from '../../Layout';
import { TimeContainer } from './styles';
import { PrimaryText, SecundaryText } from '../../Layout/text';
import { LanguageChip } from '../ReposBox/components/LanguageChip/styles';

interface UserDateTime {
  time?: UserTime;
}

export function DateTime({ time }: UserDateTime) {
  const date = new Date(time?.datetime ?? '');

  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  });

  return (
    <TimeContainer style={{ ...springs }}>
      <LanguageChip
        style={{ marginTop: '-1.5rem', backgroundColor: '#59d3e1' }}
      >
        <PrimaryText style={{ fontSize: '12px' }}>
          YOUR PUBLIC INFORMATION
        </PrimaryText>
      </LanguageChip>
      <FlexRow style={{ justifyContent: 'space-between' }}>
        <FlexCol>
          <SecundaryText>Where:</SecundaryText>
          <PrimaryText>{time?.timezone}</PrimaryText>
        </FlexCol>
        <FlexCol>
          <SecundaryText>Time-Stamp:</SecundaryText>
          <PrimaryText>{date.toLocaleTimeString()}</PrimaryText>
        </FlexCol>
      </FlexRow>
      <Divider color="#e4e4e4" />
      <FlexRow style={{ justifyContent: 'space-between' }}>
        <FlexCol>
          <SecundaryText>Week day:</SecundaryText>
          <PrimaryText>{time?.day_of_week}</PrimaryText>
        </FlexCol>
        <FlexCol>
          <SecundaryText>Day of the year:</SecundaryText>
          <PrimaryText>{time?.day_of_year}</PrimaryText>
        </FlexCol>
      </FlexRow>
    </TimeContainer>
  );
}
