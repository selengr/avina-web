import { useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Chip, Grid } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { Text } from 'components';
import { Util } from 'utils';
import { messages } from '../../../messages';
import { useTranslation } from 'react-i18next';

interface Props {
  accordion: any;
  content: string;
  data: any;
  index: string | number;
}

const Item = ({ accordion, data, content, index }: Props) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<any[]>([]);
  const collapse = (arg: any) => {
    const currentIndexPosition = expanded.indexOf(arg);
    const newIndex = [...expanded];
    if (currentIndexPosition > -1) {
      newIndex.splice(currentIndexPosition, 1);
    } else {
      newIndex.push(arg);
    }
    setExpanded(newIndex);
  };
  const fontSize = Util.DefaultFontSize();
  return (
    <Grid item xs={12}>
      <Accordion expanded={accordion ? accordion : expanded.includes(index)} onClick={() => collapse(index)} TransitionProps={{ unmountOnExit: true }}>
        <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='panel1a-header'>
          <Grid container>
            <Grid item xs={12}>
              <Text variant={fontSize} html>
                {content}
              </Text>
            </Grid>
          </Grid>
        </AccordionSummary>
        {[data].map((item, i) =>
          item.users.length <= 0 ? (
            <Grid container key={i}>
              <Grid item xs={12}>
                <Chip sx={{ borderRadius: '6px' }} label={`${t(messages.Input_Global_NoParticipant())}`} />
              </Grid>
            </Grid>
          ) : (
            <AccordionDetails key={i}>
              <Grid container spacing={1}>
                {item.users.map((userItems, userIndex) => (
                  <Grid item container key={userIndex} xs={12} md={6} xl={4}>
                    <Chip sx={{ borderRadius: '6px', width: '100%' }} label={[userItems.user_name, ` |  ${t(messages.Input_Global_Age())} `, userItems.user_age]} />
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          ),
        )}
      </Accordion>
    </Grid>
  );
};
export default function UpperLowerItem(props) {
  return (
    <>
      {[props.item.content].map((item, i: any) => (
        <Grid container key={i} spacing={2}>
          {props.item.content.upper.users.length > 0 && <Item accordion={props.accordion} content={props.item.content.upper.text} data={props.item.content.upper} index={i + 'u'} />}
          {props.item.content.lower.users.length > 0 && <Item accordion={props.accordion} content={props.item.content.lower.text} data={props.item.content.lower} index={i + 'l'} />}
        </Grid>
      ))}
    </>
  );
}
