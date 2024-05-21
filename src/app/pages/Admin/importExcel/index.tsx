import { Card, CardContent, Grid } from '@mui/material';
import { Button, Icons, Text, Title } from 'components';
import React, { useRef, useState } from 'react';
import { adminHttp } from 'api';
import { store } from 'redux/store/Store';
import { setAlert } from 'redux/action/creators';

export const ImportExcel = () => {
  const [selectedFile, setSelectedFile] = useState<any>();
  const hiddenFileInput: any | null = useRef(null);

  const handleImportExcel = async () => {
    const fileData: any = new FormData();
    fileData.append('import_file', selectedFile);
    try {
      const result = await adminHttp.importExcel(fileData);
      store.dispatch(setAlert(true, 'success', `${result.data.message}`, 'Alert') as any);
    } catch (error) {
      store.dispatch(setAlert(true, 'error', 'خطا در بارگذاری فایل ', 'Alert') as any);
    }
  };

  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container justifyContent={'center'} spacing={2}>
            <Grid item xs={12}>
              <Title value={'import excel'} />
            </Grid>
            <Grid
              item
              container
              md={10}
              xs={12}
              spacing={4}
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                marginTop: 40,
                alignItems: 'center',
              }}>
              <Grid item xs={12}>
                <Text variant={'title'}> فایل نهایی را با کلیک بر دکمه زیر بارگذاری کنید و سپس دکمه ثبت را بزنید. توجه کنید نام و فرمت فایل دقیقا مشابه فایل نمونه باشد.</Text>
              </Grid>
              <Grid item container md={4} xs={12} spacing={4}>
                <Grid item xs={12}>
                  <input
                    accept='import_file.xlsx'
                    className={'d-none'}
                    type='file'
                    ref={hiddenFileInput}
                    style={{ display: 'none' }}
                    onChange={(e) => setSelectedFile(e.target.files ? e.target.files[0] : null)}
                  />

                  <Button fullWidth={true} type={'contained'} label={'بارگذاری فایل'} onClick={() => hiddenFileInput.current.click()} icon={<Icons name={'Upload'} />} />
                </Grid>
                <Grid item xs={12}>
                  <Button fullWidth={true} type={'contained'} label={'ثبت'} onClick={() => handleImportExcel()} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
export default ImportExcel;
