import { memo } from 'react';
import styled from 'styled-components/macro';
import { themes } from 'styles/theme/colors';
import { Util } from 'utils';
import { Card, CardActionArea, CardContent, Grid } from '@mui/material';
import Task from 'assets/images/Task.svg';
import Test from 'assets/images/Test.svg';
import { Text } from 'components';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';

interface Props {
  id?: string;
  label: string;
  status?: 'done' | 'unDone';
  divider?: any;
  onClick?: any;
  active?: boolean;
  type?: 'task' | 'test';
}

export const Divider = ({ status }) => {
  return <DividerStyled style={status ? { background: `${status === `done` ? `${themes.light.Success.main}` : `${themes.light.Error.main}`} ` } : { border: `solid 1px transparent` }} />;
};

const DividerStyled = styled.div`
  width: 1.5px;
  height: 65px;
  @media only screen and (max-width: 600px) {
    height: 35px;
  }
`;
export const StyledMicroCard = memo(({ id, label, onClick, status, divider, active, type }: Props) => {
  const { t } = useTranslation();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();
  const statusText = (status === 'done' && `${t(messages.Input_Global_TestDone())}`) || (status === 'unDone' && `${t(messages.Input_Global_TestUndone())}`);
  return (
    <MicroCard id={id} variant={'outlined'}>
      <CardActionArea id={id} onClick={onClick} disabled={!onClick}>
        <CardContent id={id} sx={{ p: '12px !important' }}>
          <Grid id={id} container alignItems={'center'} spacing={1}>
            {type && (
              <Grid item xs={5} md={4}>
                <img src={type === 'task' ? Task : Test} style={{ borderRadius: '6px', border: '2px solid #bdbdbd', padding: '3px 1px 3px 10px' }} />
              </Grid>
            )}
            {divider ||
              (onClick && (
                <Grid item>
                  <Divider status={!active ? status : 'done'} />
                </Grid>
              ))}
            <Grid item xs={type ? 7 : 11}>
              <Text id={id} variant={fontSize} weight={deviceType === 'mobile' ? 'medium' : 'bold'}>
                {label}
              </Text>
              <Text id={id} type={'body'} variant={deviceType === 'mobile' ? 'mobile9' : 'web14'} weight={'regular'} style={{ color: '#6a6a6a' }}>
                {statusText}
              </Text>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </MicroCard>
  );
});
export default { StyledMicroCard };

const MicroCard = styled(Card)`
  border-radius: 6px;
`;
