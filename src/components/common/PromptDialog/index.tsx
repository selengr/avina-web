/**
 *
 * PromptDialog
 *
 */
import { Fragment, memo } from 'react';
import { Box, Grid } from '@mui/material';
import { BottomSheetDialog, Button, Text } from 'components/index';
import { useDispatch, useSelector } from 'react-redux';
import { setPrompt } from 'redux/action/creators';
import { messages } from '../../messages';
import { useTranslation } from 'react-i18next';

interface Props {
  accept: (event) => void;
}

export const PromptDialog = memo(({ accept }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const option: any = useSelector<any>((state) => state.prompt);

  const handleClose = () => {
    dispatch(setPrompt(false, '') as any);
  };
  return (
    <Fragment>
      <BottomSheetDialog size={'xs'} fullWidth open={option.state} onClose={handleClose}>
        <Box
          component='div'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mb: 3,
            mx: 'auto',
            width: 'fit-content',
          }}>
          <Text type={'body'} variant={'web14'} weight={'regular'} color={'secondary'}>
            {option.message}
          </Text>
        </Box>
        <Grid container spacing={1} direction={'row-reverse'} justifyContent={'center'}>
          <Grid item xs={6} lg={4}>
            <Button type={'outlined'} onClick={accept} label={`${t(messages.Input_Global_Delete())}`} fullWidth />
          </Grid>
          <Grid item xs={6} lg={4}>
            <Button type={'contained'} onClick={handleClose} label={`${t(messages.Input_Global_Cancel())}`} fullWidth />
          </Grid>
        </Grid>
      </BottomSheetDialog>
    </Fragment>
  );
});

export default PromptDialog;
