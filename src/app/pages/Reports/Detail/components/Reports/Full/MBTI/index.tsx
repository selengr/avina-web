import { Grid } from '@mui/material';
import ReportTextItem from '../../../Items/ReportTextItem';

export function MBTIReport(props) {
  const MBTIFull = JSON.parse(localStorage.MBTIFull);

  return (
    <Grid item container spacing={1}>
      {MBTIFull.map((item, i) => (
        <Grid item xs={12} key={i}>
          <ReportTextItem accordionExpand={props.expander} accordion={props.childAccordion} item={item} />
        </Grid>
      ))}
    </Grid>
  );
}
