import { useEffect, useState } from 'react';
import { Alert, AlertTitle, Backdrop, Box, CircularProgress, IconButton, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounceFn } from 'ahooks';
import { setAlert } from 'redux/action/creators';
import { Icons } from 'components/Icons';
import { CloseRounded } from '@mui/icons-material';
import Slide from '@mui/material/Slide';

export const StyledSnackBar = () => {
  const dispatch = useDispatch();
  const option: any = useSelector<any>((state) => state.alert);
  const [open, setOpen] = useState({
    open: false,
    Transition: Slide,
  });

  const [progressValue, setProgressValue] = useState<number>(0);
  const handleClose = () => {
    dispatch(setAlert(false, 'success', '', '') as any);
  };
  const { run } = useDebounceFn(
    () => {
      handleClose();
    },
    {
      wait: 6000,
    },
  );

  useEffect(() => {
    if (open.open) {
      const timer = setInterval(() => {
        setProgressValue((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 580);

      return () => {
        clearInterval(timer);
      };
    } else {
      setProgressValue(0);
    }
  }, [open.open]);

  useEffect(() => {
    setOpen({
      ...open,
      open: option.open,
    });
    run();
  }, [option.open]);
  return (
    <Backdrop
      sx={{
        color: '#fff',
        cursor: 'wait',
        backdropFilter: 'blur(2px)',
        zIndex: (theme) => theme.zIndex.drawer + 1000000,
      }}
      open={open.open}
      onClick={handleClose}>
      <Snackbar
        open={open.open}
        TransitionComponent={open.Transition}
        key={open.Transition.name}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{ minWidth: '60%', maxWidth: '100%' }}
        onClick={handleClose}>
        <Alert
          action={
            <IconButton
              id='basic-button'
              aria-controls='basic-menu'
              aria-haspopup='true'
              aria-expanded={open.open ? 'true' : undefined}
              color={option.severity ? option.severity : 'inherit'}
              disableRipple
              onClick={() => {
                handleClose();
              }}
              onFocus={(event) => event.stopPropagation()}>
              <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress variant={'determinate'} value={progressValue} size={30} thickness={4} color={option.severity ? option.severity : 'inherit'} />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <CloseRounded fontSize={'small'} color={option.severity ? option.severity : 'inherit'} />
                </Box>
              </Box>
            </IconButton>
          }
          severity={option.severity}
          icon={<Icons name={option.icon} />}
          sx={{
            width: '100%',
          }}>
          <AlertTitle>{option.message}</AlertTitle>
        </Alert>
      </Snackbar>
    </Backdrop>
  );
};

export default { StyledSnackBar };
