import { forwardRef } from 'react';
import { AlertTitle } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Icons } from 'components';

interface Props {
  severity: 'error' | 'success' | 'warning';
  icon?: 'Alert' | 'Done';
  title?: string;
  message: string;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={1} ref={ref} variant={'outlined'} {...props} />;
});

export const StyledAlert = ({ severity, icon, message, title }: Props) => {
  return (
    <Alert
      severity={severity}
      icon={<Icons name={icon} />}
      sx={{
        width: '100%',
        borderRadius: '6px',
      }}>
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  );
};

export default { StyledAlert };
