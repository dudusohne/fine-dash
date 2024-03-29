import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { FlexCol, Container } from '../../Layout';
import { PrimaryText, SecundaryText } from '../../Layout/text';
import { HomeContent } from '../Home/styles';

export function NotFound404() {
  const navigate = useNavigate();

  return (
    <Container>
      <HomeContent>
        <FlexCol
          style={{
            width: '100%',
            height: '96.5vh',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <PrimaryText style={{ fontSize: '42px' }}>
            404 - Page not found.
          </PrimaryText>
          <SecundaryText style={{ margin: '1rem 0 1rem 0', fontSize: '18px' }}>
            press the button to go back..
          </SecundaryText>
          <Button
            label="BACK"
            labelColor="white"
            buttonColor="black"
            onClickButton={() => navigate('/')}
          />
        </FlexCol>
      </HomeContent>
    </Container>
  );
}
