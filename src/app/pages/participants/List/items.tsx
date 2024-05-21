import * as React from 'react';
import { Card, Grid, IconButton, Menu } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BottomSheet, Button, Checkbox, Icons, Item, Text } from 'components';
import { Util } from 'utils';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';

export default function Items(props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { t } = useTranslation();
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const deviceType = Util.ScreenSize();
  const fontSize = Util.DefaultFontSize();

  return (
    <Card variant='outlined' style={{ padding: '10px' }}>
      <Grid container alignItems={'center'}>
        <Grid item md={6} xs={12}>
          <Checkbox
            checked={props.checked}
            onChange={() => {
              props.checkItems(props.item);
            }}
            labelStyle={deviceType === 'mobile' ? { paddingRight: '0' } : { paddingRight: '16px' }}
            id={props.item.id}
            label={props.item.name}
            weight={'bold'}
          />
        </Grid>
        <Grid item container md={6} xs={12} alignItems={'center'} sx={deviceType === 'mobile' ? { paddingRight: '12px' } : { paddingRight: '0' }}>
          <Grid item md={6} xs={5}>
            <Text variant={fontSize} weight={'regular'}>
              {props.item.sex === 1 ? `${t(messages.Input_Global_Male())}` : `${t(messages.Input_Global_Female())}`}
            </Text>
          </Grid>
          <Grid item md={4} xs={5}>
            <Text variant={fontSize} weight={'regular'}>
              {`${props.item.age} ${t(messages.Input_Global_Year())} `}{' '}
            </Text>
          </Grid>
          <Grid item container xs={2} justifyContent={'flex-end'}>
            <Grid item>
              <IconButton onClick={handleClick} onFocus={(event) => event.stopPropagation()}>
                <MoreVertIcon fontSize={'medium'} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {deviceType === 'mobile' ? (
        <BottomSheet open={open} onClose={handleClose}>
          <Grid container spacing={1} sx={{ px: 1 }}>
            <Item
              icon={'Edit'}
              onClick={() => {
                props.edit(props.item.id);
                setAnchorEl(null);
              }}>
              <Text type={'body'} variant={'mobile12'} weight={'regular'}>
                {t(messages.Input_ParticipantsList_Edit())}
              </Text>
            </Item>
            <Item
              icon={'Trash'}
              onClick={() => {
                props.remove(props.item.id);
                setAnchorEl(null);
              }}
              disabled={props.item.status === 1}>
              <Text type={'body'} variant={'mobile12'} weight={'regular'}>
                {t(messages.Input_Global_Delete())}
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
              <Button
                type={'outlined'}
                label={`${t(messages.Input_ParticipantsList_Edit())}`}
                icon={<Icons name={'Edit'} />}
                fullWidth
                onClick={() => {
                  props.edit(props.item.id);
                  setAnchorEl(null);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type={'outlined'}
                label={`${t(messages.Input_Global_Delete())}`}
                icon={<Icons name={'Trash'} />}
                fullWidth
                onClick={() => {
                  props.remove(props.item.id);
                  setAnchorEl(null);
                }}
                disabled={props.item.status === 1}
              />
            </Grid>
          </Grid>
        </Menu>
      )}
    </Card>
  );
}
