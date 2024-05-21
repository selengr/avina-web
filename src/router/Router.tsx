import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import MyRoutes from './Components/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Util } from 'utils';
import { useTranslation } from 'react-i18next';
import { ContainerPage } from 'components/common/Container';
import { Box, Grid } from '@mui/material';
import { FooterTab, Logo } from 'components';

// @ts-ignore
import APP from '../../package.json';

export function AppRouter() {
  const deviceType = Util.ScreenSize();
  // const userData = Util.userAllData();
  const { i18n } = useTranslation();

  const search = (data: any) => {
    // const filterRoleType = data.filter((o) => o.roleType === userData.data.data.last_role_type);
    // return filterRoleType.filter((o) => o.id === userData.data.data.last_role);
  };

  const [role, setRole] = useState<string>('');

  useEffect(() => {
    console.info(
      '\n\x1b[35m\x1b[1m' +
        '                     ┌┬┬┬┬┬┬┬┬┐       ┌┬┬┬┬┬┬┐   ┌┬┬┬┐     ┌┬┬┬┐    ┌┬┬┬┐\n' +
        '                   ┌┬┼┼┼┼┼┼┼┼┼┼┬┐   ┌┬┼┼┴┴┴┼┼┼┬┐ └┼┼┼┼┐   ┌┼┼┼┼┘   ┌┼┼┼┼┼┐\n' +
        '                   ├┼┼┼┼┼┼┼┼┼┼┼┼┼┐ ┌┼┼┼┤   └┴┴┴┘  └┼┼┼┼┬┬┬┼┼┼┼┘   ┌┼┼┼┼┼┼┼┐\n' +
        '                   ├┼┼┼┼┼┴┼┼┼┼┼┼┼┘ └┼┼┼┼┬─┬┐       └┴┼┼┼┴┼┼┼┴┘   ┌┼┼┼┼┴┼┼┼┼┐\n' +
        '                   ├┼┼┼┼┤\x1b[0mP\x1b[35m\x1b[1m├┼┼┼┴┴┘   └┼┼┼┤\x1b[0mS\x1b[35m\x1b[1m├┼┬┬┬┐     └┼┤\x1b[0mY\x1b[35m\x1b[1m├┼┘    ┌┼┼┼┼┤\x1b[0mA\x1b[35m\x1b[1m├┼┼┼┼┐\n' +
        '                   ├┼┼┼┼┴─┴┴┴┘       └┴┴┴─┴┴┼┼┼┼┐     ├┼┬┼┤    ┌┼┼┼┼┼┼┬┼┼┼┼┼┼┐\n' +
        '                   ├┼┼┼┤            ┌┬┬┬┐   ├┼┼┼┘     ├┼┼┼┤   ┌┼┼┼┼┴┴┴┴┴┴┴┼┼┼┼┐\n' +
        '                   ├┼┼┼┘            └┴┼┼┼┬┬┬┼┼┴┘      ├┼┼┼┤  ┌┼┼┼┼┘       └┼┼┼┼┐\n' +
        '                   └┴┴┘               └┴┴┴┴┴┴┘        └┴┴┴┘  └┴┴┴┘         └┴┴┴┘\n' +
        '\x1b[34m\x1b[2m\x1b[3m' +
        '                                          HTTPS://\x1b[0m\x1b[34m\x1b[3mPSYA\x1b[2m.IR                          ' +
        '\n' +
        '                                              ' +
        `${APP.version}` +
        '                                     ' +
        '\n' +
        '\n' +
        '\x1b[0m\x1b[32m',
    );
    // userData.loggedIn && setRole(search(userData.roles)[0].userType);
  }, []);

  const Sidebar = () => {
    return <ContainerPage  />;
  };

  const Content = () => {
    return (
      <>
 <MyRoutes.users userName={"testsetsest"} />
  
      </>
    );
  };
  return (
    <Router basename='/app'>
      <Helmet titleTemplate='%s - PSYA' defaultTitle='سامانه ارزیابی سایا' htmlAttributes={{ lang: i18n.language }}>
        <meta name='description' content='سامانه ارزیابی سایا' />
      </Helmet>
   
        <Box sx={{ pb: deviceType === 'mobile' && role !== 'agent' ? 5 : 0 }}>
          <Grid container>
        
              <Grid item sx={{ width: { md: 300 }, flexShrink: { sm: 0 } }}>
                <Sidebar />
              </Grid>
           
            <Grid item sx={{ flexGrow: 1, p: 3, width: { md: 'calc(100% - 300px)' } }}>
              <Content />
            </Grid>
          </Grid>
        </Box>
   
    </Router>
  );
}
