import { Menus } from 'components/common/Container/menuItems';
import { useLocation, useNavigate } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

export const FooterTab = (Props) => {
  const menuItems = Menus();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const setRouteActive = (value: string) => {
    navigate(value);
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: '100000', overflowY: 'hidden' }} elevation={3}>
      <BottomNavigation showLabels value={pathname} onChange={(event, value) => setRouteActive(value)}>
        {Props.role === 'scope' &&
          menuItems.scope.map((item, i) => {
            return (
              <BottomNavigationAction key={i} value={item.path} icon={item.icon} label={item.primaryName} showLabel={false} sx={{ whiteSpace: 'nowrap', fontSize: '0.6rem', minWidth: 0, px: 0 }} />
            );
          })}
        {Props.role === 'user' &&
          menuItems.user.map((item, i) => {
            return (
              <BottomNavigationAction key={i} value={item.path} icon={item.icon} label={item.primaryName} showLabel={false} sx={{ whiteSpace: 'nowrap', fontSize: '0.6rem', minWidth: 0, px: 0 }} />
            );
          })}
      </BottomNavigation>
    </Paper>
  );
};
