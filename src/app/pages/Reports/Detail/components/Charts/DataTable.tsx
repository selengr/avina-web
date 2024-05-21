import { Card, CardContent, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Text } from 'components';
import { Util } from 'utils';
import { messages } from '../../../messages';
import { useTranslation } from 'react-i18next';

export function DataTable(props) {
  const { t } = useTranslation();
  const fontSize = Util.DefaultFontSize();

  return (
    <Grid item xs={12}>
      <Card variant={'outlined'}>
        <CardContent>
          <Grid item xs={12} sx={{ color: '#6a6a6a' }}>
            <Text variant={fontSize} html>
              {props.title.title}
            </Text>
          </Grid>
          <TableContainer>
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell variant={'head'} align='center'>
                    {t(messages.Charts_ReportsDetail_Title())}
                  </TableCell>
                  <TableCell variant={'head'} align='center'>
                    {t(messages.Charts_ReportsDetail_Content())}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.rows.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell align='center'>{props.headers[index]}</TableCell>
                    <TableCell align='center'>{props.rows[index]}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Grid>
  );
}
