import { memo, useEffect, useState } from 'react';
import { Backdrop } from '@mui/material';
import { useSelector } from 'react-redux';
import Lottie from 'lottie-react';
import animationData from 'assets/lottie.json';
import { useLockFn } from 'ahooks';

export const BackDrop = memo(() => {
  const isOpen: any = useSelector<any>((state) => state.backDrop);
  const [state, setState] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(2000);

  function Req() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, timer);
    });
  }

  const run = useLockFn(async () => {
    setState(isOpen.backDrop);
    // setState(false);
    await Req();
    setState(false);
  });

  useEffect(() => {
    isOpen.state ? setTimer(1) : setTimer(2000);
    run().then((r) => r);
  }, [isOpen]);

  if (state) {
    return (
      <Backdrop
        sx={{
          color: '#fff',
          backdropFilter: 'blur(7px)',
          backgroundColor: 'rgba(250, 250, 250, 0.4)',
          zIndex: (theme) => theme.zIndex.drawer + 100000,
          // right:'auto',
          // width:'calc(100% - 300px)'
        }}
        open={true}>
        {/*<Lottie options={defaultOptions} height={400} width={400} />*/}
        <Lottie animationData={animationData} loop={true} autoPlay={true} style={{ height: 400, width: 400 }} />
      </Backdrop>
    );
  } else {
    return null;
  }
});
export default BackDrop;
