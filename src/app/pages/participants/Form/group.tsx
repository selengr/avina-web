import { Grid } from '@mui/material';
import { Button, Icons, Text } from 'components';
import { Excel } from 'api/config/server/server';
import React, { useRef } from 'react';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { Box } from './item';

type Props = {
  children: React.ReactElement | React.ReactElement[];
  file: any;
};

export const AddGroupUser = ({ children, file }: Props) => {
  const { t } = useTranslation();
  const hiddenFileInput: any | null = useRef(null);

  return (
    <Grid item container xs={12} md={10} lg={8} xl={6} spacing={1}>
      <Text variant={'web14'} weight={'bold'}>
        {t(messages.Text_ParticipantsForm_UploadParticipant())}
      </Text>
      <Grid item container spacing={2}>
        <Box title={`${t(messages.Input_ParticipantsForm_SampleFile())}`}>
          <a href={Excel().endPoint}>
            <Button type={'contained'} label={`${t(messages.Input_ParticipantsForm_DownloadFile())}`} icon={<Icons name={'Download'} />} />
          </a>
        </Box>
        <Box title={`${t(messages.Input_ParticipantsForm_UploadFileExplanation())}`}>
          <label htmlFor='contained-button-file'>
            <input
              accept='import_file.xlsx'
              className={'d-none'}
              id='contained-button-file'
              type='file'
              ref={hiddenFileInput}
              style={{ display: 'none' }}
              onChange={(e) => file(e.target.files ? e.target.files[0] : null)}
            />
            <Button type={'contained'} label={`${t(messages.Input_ParticipantsForm_UploadFile())}`} onClick={() => hiddenFileInput.current.click()} icon={<Icons name={'Upload'} />} />
          </label>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Text variant={'web14'} weight={'bold'}>
          {t(messages.Text_ParticipantsForm_ChooseGroup())}
        </Text>
      </Grid>
      <Grid item container justifyContent={'center'}>
        <Grid item md={6} xs={12}>
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};
