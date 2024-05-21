import { Util } from 'utils';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { Button, Text } from 'components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';

export function NotFoundPage() {
  const { t } = useTranslation();
  const deviceType = Util.ScreenSize();
  const auth: boolean = Util.LoggedIn();
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate('login');
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name='description' content='Page not found' />
      </Helmet>
      <Wrapper>
        <Text variant={deviceType === 'web' ? 'web30' : 'mobile12'} weight={'bold'} style={{ color: '#433792' }}>
          404
        </Text>
        <Text variant={deviceType === 'web' ? 'web16' : 'mobile12'}>{t(messages.Text_ComponentsNotFoundPage_NotFound())}</Text>
        <Button sx={{ marginTop: '20px' }} type={'outlined'} label={`${t(messages.Input_ComponentsNotFoundPage_BackHome())}`} onClick={() => navigate('/')} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;
