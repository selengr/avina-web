import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Chip, Grid } from '@mui/material';
import { Text } from 'components';
import { useEffect, useState } from 'react';
import { ExpandMore } from '@mui/icons-material';
import { Util } from 'utils';
import { messages } from '../../../messages';
import { useTranslation } from 'react-i18next';

interface Interface {
  value: string;
}

const Items = ({ value }: Interface) => {
  const fontSize = Util.DefaultFontSize();
  return (
    <Text variant={fontSize} style={{ lineHeight: '36px' }} html>
      {value ? value : ''}
    </Text>
  );
};

export default function ReportTextItem(props) {
  const { t } = useTranslation();
  const fontSize = Util.DefaultFontSize();
  const [totalArraySegments, setTotalArraySegments] = useState<any[]>([]);
  const [expanded, setExpanded] = useState<any[]>([]);

  const collapse = (i) => {
    const currentIndexPosition = expanded.indexOf(i);
    const newIndex = [...expanded];
    if (currentIndexPosition > -1) {
      newIndex.splice(currentIndexPosition, 1);
    } else {
      newIndex.push(i);
    }
    setExpanded(newIndex);
  };

  const data: any[] = [];

  useEffect(() => {
    if (props.item.segments) {
      Object.entries(props.item.segments).forEach(([key, value]) => {
        data.push(value);
      });
      setTotalArraySegments(data);
    }
  }, []);
  return (
    <>
      {(props.item.content || props.item.segments) && (
        <Card variant={'outlined'} sx={props.item.totalCount <= 0 ? { display: 'none' } : { display: 'flex' }}>
          <CardContent sx={{ paddingBottom: '16px !important' }}>
            <Grid container>
              <Grid item xs={12} sx={{ color: '#6a6a6a' }}>
                <Text variant={fontSize} html>
                  {props.item.title ? props.item.title : ''}
                </Text>
              </Grid>
              <Grid item xs={12}>
                <Items value={props.item.active} />
                <Items value={props.item.reflective} />
                <Items value={props.item.sensing} />
                <Items value={props.item.intuitive} />
                <Items value={props.item.visual} />
                <Items value={props.item.verbal} />
                <Items value={props.item.global} />
                <Items value={props.item.sequential} />
                <Items value={props.item.condition} />
              </Grid>
              <Grid item xs={12} sx={{ pr: '20px' }}>
                <Items value={props.item.content} />
              </Grid>
              <Grid item container>
                {totalArraySegments.map((item, i) => (
                  <Grid item key={i} xs={12} sx={item.users.length <= 0 ? { display: 'inline', mt: 2 } : { display: 'inline', mt: 2 }}>
                    <Accordion expanded={props.accordion ? props.accordion : expanded.includes(i)} onClick={() => collapse(i)} TransitionProps={{ unmountOnExit: true }}>
                      <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='panel1a-header'>
                        <Grid container spacing={1}>
                          <Grid item xs={12}>
                            <Text variant={fontSize} weight={'bold'} html>
                              {item.title.length >= 1 ? item.title : ''}
                            </Text>
                          </Grid>
                          <Grid item xs={12}>
                            <Text variant={'web14'} html>
                              {item.text}
                            </Text>
                          </Grid>
                        </Grid>
                      </AccordionSummary>
                      {item.users.length <= 0 ? (
                        <Grid container>
                          <Grid item xs={12}>
                            <Chip sx={{ borderRadius: '6px' }} label={`${t(messages.Input_Global_NoParticipant())}`} />
                          </Grid>
                        </Grid>
                      ) : (
                        <AccordionDetails>
                          <Grid container spacing={1}>
                            {item.users.map((userItems, userIndex) => (
                              <Grid item container key={userIndex} xs={12} md={6} xl={4}>
                                <Chip sx={{ borderRadius: '6px', width: '100%' }} label={[userItems.user_name, ` |  ${t(messages.Input_Global_Age())} `, userItems.user_age]} />
                              </Grid>
                            ))}
                          </Grid>
                        </AccordionDetails>
                      )}
                    </Accordion>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
    </>
  );
}
