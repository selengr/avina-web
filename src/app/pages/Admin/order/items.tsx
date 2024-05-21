import { Accordion, AccordionDetails, AccordionSummary, Divider, Grid } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import jMoment from 'moment-jalaali';
import { Button } from 'components';

export default function Items(props) {
  const navigate = useNavigate();

  const handleVerify = (event) => {
    event.stopPropagation();
    props.verify(props.item.transaction_id);
  };

  const handleStatus = () => {
    switch (props.item.status) {
      case 0:
        return 'پرداخت نشده';
      case 1:
        return 'شارژ کیف پول';
      case 2:
        return 'خرید با کیف پول';
      case 3:
        return 'خرید مستقیم';
      case 4:
        return 'شارژ موفق';
      default:
        return '';
    }
  };
  const handlePurchaseStatus = () => {
    switch (props.item.purchase_status) {
      case 0:
        return 'نا مشخص';
      case 1:
        return 'ناموفق';
      case 2:
        return 'موفق';
      default:
        return 'نامعلوم';
    }
  };

  return (
    <Accordion TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='panel1a-header'>
        <Grid container justifyContent={'space-between'}>
          <Grid item>
            <small>تاریخ بروزرسانی : &nbsp;{jMoment(props.item.updated_at, 'YYYY/MM/DD,  hh:mm').format('jYYYY/jMM/jDD')}</small>
          </Grid>
          <Divider orientation='vertical' flexItem light />
          <Grid item>
            <small> شناسه تراکنش : </small>
            &nbsp;
            {props.item.id}
          </Grid>
          <Divider orientation='vertical' flexItem light />
          <Grid item>
            <strong>
              <small> شماره تراکنش: </small>
              {props.item.transaction_id}
            </strong>
          </Grid>
          <Divider orientation='vertical' flexItem light />
          <Grid item>
            <strong className='mx-1'>{parseInt(props.item.to_pay).toLocaleString('fa')}</strong>
            <small> تومان </small>
          </Grid>
          <Divider orientation='vertical' flexItem light />
          <Grid item>
            <Button type={'contained'} label={'تایید'} fullWidth={true} onClick={(e) => handleVerify(e)} disabled={!props.item.transaction_id} />
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container sx={{ textAlign: 'left' }}>
          <Grid item xs={6}>
            id: {props.item.id}
          </Grid>
          <Grid item xs={6}>
            user_id: {props.item.user_id}
          </Grid>
          <Grid item xs={6}>
            owner_id: {props.item.owner_id}
          </Grid>
          <Grid item xs={6}>
            total_price: {props.item.total_price}
          </Grid>
          <Grid item xs={6}>
            tax: {props.item.tax}
          </Grid>
          <Grid item xs={6}>
            discount: {props.item.discount}
          </Grid>
          <Grid item xs={6}>
            paid: {props.item.paied}
          </Grid>
          <Grid item xs={6}>
            to_pay: {props.item.to_pay}
          </Grid>
          <Grid item xs={6}>
            {handleStatus()} :status
          </Grid>
          <Grid item xs={6}>
            created_at: {props.item.created_at}
          </Grid>
          <Grid item xs={6}>
            owner_name: {props.item.owner_name}
          </Grid>
          <Grid item xs={6}>
            user_name: {props.item.user_name}
          </Grid>
          <Grid item xs={6}>
            {handlePurchaseStatus()} :purchase_status
          </Grid>
          <Grid item xs={6}>
            purchase_created_at: {jMoment(props.item.purchase_created_at, 'YYYY/MM/DD,  hh:mm').format('jYYYY/jMM/jDD')}
          </Grid>
          <Grid item xs={6}>
            purchase_updated_at: {jMoment(props.item.updated_at, 'YYYY/MM/DD,  hh:mm').format('jYYYY/jMM/jDD')}
          </Grid>
          <Grid item xs={6}>
            <Button type={'contained'} label={'اطلاعات بیشتر'} onClick={() => navigate(`/admin/order/info/?id=${props.item.id}`)} />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
