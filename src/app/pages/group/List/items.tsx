import { Card, CardActionArea, CardActions, CardContent, CardHeader, Grid, IconButton, Menu } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BottomSheet, Button, Divide, Icons, Item, Text } from 'components';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import * as React from 'react';
import { Util } from 'utils';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { getGroupShowOne } from '../Logic';

export default function Items(props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();
  const owner_id = Util.extractID();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function gotoInfo(id) {
    getGroupShowOne(id);
    navigate(`/groups/info/?id=${id}`);
    // Service.Request(Types.GROUP_SHOWONE_REQUEST, owner_id, id);
    // await getUserList({ groupId: id, pageNumber: 1 });
  }

  return (
    <Card variant='outlined'>
      <CardActionArea disableRipple={true} onClick={() => gotoInfo(props.item.id)}>
        <CardHeader
          sx={{ p: 1, mt: 1, height: 50 }}
          title={
            <Text variant={fontSize} type={'title2'} weight={'bold'} align={'right'} style={{ marginRight: '7px' }}>
              {props.item.name}
            </Text>
          }
          action={
            <IconButton
              id='basic-button'
              aria-controls='basic-menu'
              aria-haspopup='true'
              aria-expanded={open ? 'true' : undefined}
              color={'primary'}
              onClick={(event) => {
                event.stopPropagation();
                handleClick(event);
              }}
              onFocus={(event) => event.stopPropagation()}>
              <MoreVertIcon fontSize={'small'} color={'primary'} />
            </IconButton>
          }
          dir={'rtl'}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item container>
              <Divide />
            </Grid>
            <Grid
              item
              container
              style={deviceType === 'web' ? { height: 115 } : { height: 60 }}
              sx={{
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              }}>
              <Text variant={fontSize} type={'body'} weight={'regular'} align={'right'} style={{ color: '#6a6a6a' }}>
                {props.item.description}
              </Text>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions sx={{ p: 1 }}>
          <Grid container>
            <Grid item container>
              <Icons name={'Group'} size={deviceType === 'web' ? 'web' : 'mobile'} />
              <Text variant={fontSize} weight={'medium'} type={'body'}>
                {`${props.item.member_count} ${t(messages.Input_Global_Participant())}`}
              </Text>
            </Grid>
          </Grid>
        </CardActions>
      </CardActionArea>
      {deviceType === 'mobile' ? (
        <BottomSheet open={open} onClose={handleClose}>
          <Grid container spacing={1}>
            <Item icon={'Edit'} onClick={() => props.edit(`/group/edit/?id=`, props.item.id)}>
              <Text variant={'mobile12'} type={'body'} weight={'regular'}>
                {`${t(messages.Input_Global_EditGroup())}`}
              </Text>
            </Item>

            <Item icon={'Trash'} onClick={() => props.remove(props.item.id)}>
              <Text variant={'mobile12'} type={'body'} weight={'regular'}>
                {`${t(messages.Input_GroupList_RemoveGroup())}`}
              </Text>
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
              <Button type={'outlined'} label={`${t(messages.Input_Global_EditGroup())}`} fullWidth onClick={() => props.edit(`/group/edit/?id=`, props.item.id)} />
            </Grid>
            <Grid item xs={12}>
              <Button type={'outlined'} label={`${t(messages.Input_GroupList_RemoveGroup())}`} fullWidth onClick={() => props.remove(props.item.id)} disabled={props.item.status === 1} />
            </Grid>
          </Grid>
        </Menu>
      )}
    </Card>
  );
}
