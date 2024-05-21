import * as React from 'react';
import { Card, CardActionArea, CardContent, CardHeader, Divider, Grid, IconButton, Menu, Tooltip } from '@mui/material/';
import { BottomSheet, Button, Divide, Item, ProgressCircle, Switch, Text } from 'components';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import { Util } from 'utils';
import { themes } from 'styles/theme/colors';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { getAssessment } from '../Logic';

export default function ListItem(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  interface Props {
    children?: number | string;
    weight?: any;
    title?: string;
    value?: number | string;
    style?: any;
  }

  const ListItem = ({ children, weight, style }: Props) => {
    return (
      <Text variant={deviceType === 'web' ? 'web12' : 'mobile9'} type={'body'} weight={weight} align={'center'} style={style}>
        {children}
      </Text>
    );
  };

  async function gotoInfo(id) {
    // await Service.Request(Types.ASSESSMENT_SHOWONE_REQUEST, id);
    await getAssessment(id);
    navigate(`/assessment/info/?id=${id}`);
  }

  const Items = ({ title, value }: Props) => {
    return (
      <Grid item>
        <Grid container item direction='column' spacing={1} alignContent={'center'} alignItems={'center'} justifyContent={'space-evenly'}>
          <ListItem weight={'medium'} style={{ color: `${themes.light.Typography.main}` }}>
            {title}
          </ListItem>
          <Divide style={{ margin: 10 }} />
          <ListItem weight={'regular'} style={{ color: `${themes.light.Typography.Secondary}` }}>
            {value}
          </ListItem>
        </Grid>
      </Grid>
    );
  };
  return (
    <Card variant='outlined'>
      <CardActionArea disableRipple={true} onClick={() => gotoInfo(props.item.id)}>
        <CardHeader
          sx={{ p: 1 }}
          avatar={<ProgressCircle percent={props.item.assigned_count === 0 ? 0 : Math.round((100 * props.item.answered_count) / props.item.assigned_count)} />}
          title={
            <Text variant={fontSize} type={'title2'} weight={deviceType === 'web' ? 'bold' : 'medium'} align={'right'} style={{ marginRight: '7px' }}>
              {props.item.name}
            </Text>
          }
          action={
            <IconButton
              id='basic-button'
              aria-controls='basic-menu'
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              onClick={(event) => {
                event.stopPropagation();
                handleClick(event);
              }}
              onFocus={(event) => event.stopPropagation()}>
              <MoreVertIcon fontSize={'medium'} style={{ color: `${themes.light.Typography.main}` }} />
            </IconButton>
          }
          dir={'rtl'}
        />
        <CardContent sx={{ p: 1 }}>
          <Grid container direction='row' spacing={1} alignContent={'center'} alignItems={'center'} justifyContent={'space-evenly'}>
            <Items title={`${t(messages.Input_Assessment_list_items_Questioner())}`} value={props.item.questionnaires_count} />
            <Divider orientation='vertical' variant='middle' flexItem />
            <Items title={`${t(messages.Input_Global_Capacity())}`} value={props.item.capacity} />
            <Divider orientation='vertical' variant='middle' flexItem />
            <Items title={`${t(messages.Input_Global_Participant())}`} value={props.item.assigned_count} />
          </Grid>
        </CardContent>
      </CardActionArea>
      {deviceType === 'mobile' ? (
        <BottomSheet open={open} onClose={handleClose}>
          <Grid container spacing={1}>
            <Item icon={'Edit'} onClick={() => props.edit('/assessment/edit/?id=', props.item.id)}>
              <Text variant={'mobile12'} type={'body'} weight={'regular'}>
                {`${t(messages.Input_Global_EditAssessments())}`}
              </Text>
            </Item>

            <Item icon={'Trash'} disabled={props.item.status === 1} onClick={() => props.remove(props.item.id)}>
              <Text variant={'mobile12'} type={'body'} weight={'regular'}>
                {`${t(messages.Input_Global_DeleteAssessment())}`}
              </Text>
            </Item>

            <Item>
              <Grid container direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Grid item>
                  <Text variant={'mobile12'} type={'body'} weight={'regular'}>
                    {t(messages.Text_Global_AssessmentSituation())}
                  </Text>
                </Grid>
                <Grid item>
                  <Switch onChange={() => props.switch(props.item)} checked={props.status === 1} label={''} />
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </BottomSheet>
      ) : (
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}>
          <Grid container spacing={1} sx={{ px: 1, width: '165px' }}>
            <Grid item xs={12}>
              <Button type={'outlined'} label={`${t(messages.Input_Global_EditAssessments())}`} fullWidth onClick={() => props.edit('/assessment/edit/?id=', props.item.id)} />
            </Grid>
            <Grid item xs={12}>
              <Tooltip title={props.item.status === 1 ? `${t(messages.Tooltip_Global_DeleteAssessment())}` : ''} arrow>
                <span>
                  <Button type={'outlined'} label={`${t(messages.Input_Global_DeleteAssessment())}`} fullWidth onClick={() => props.remove(props.item.id)} disabled={props.status === 1} />
                </span>
              </Tooltip>
            </Grid>
            <Grid item xs={12}>
              <Switch
                onChange={() => props.switch(props.status)}
                checked={props.status === 1}
                label={
                  <Text variant={fontSize} type={'body'} weight={'regular'}>
                    {t(messages.Text_Global_AssessmentSituation())}
                  </Text>
                }
              />
            </Grid>
          </Grid>
        </Menu>
      )}
    </Card>
  );
}
