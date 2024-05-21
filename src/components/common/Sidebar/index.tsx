import { memo } from 'react';
import { Menu } from 'components';
import { Menus } from '../Container/menuItems';
import { To, useLocation, useNavigate } from 'react-router-dom';
import { Util } from 'utils';

interface Props {
  activeMenu?: any;
  isActive?: any;
  role?: 'agent' | 'user' | 'scope';
  roleType?: number;
  close?: any;
}

export const Sidebar = memo(({ role, roleType, close }: Props) => {
  const screenSize = Util.ScreenSize();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const MenuComponent = (props: { key: number; item: { iconOver: any; icon: any; primaryName: string; badge: boolean | undefined; path: To } }) => {
    return (
      <Menu
        key={props.key}
        className={screenSize}
        iconOver={props.item.iconOver}
        icon={props.item.icon}
        value={props.item.primaryName}
        badge={props.item.badge}
        id={(props.key + 1).toString()}
        active={location.pathname.includes(props.item.path as string)}
        onClick={() => {
          navigate(props.item.path);
          close();
        }}
      />
    );
  };
  return (
    <>
     { Menus().user.map((item, index) => <MenuComponent key={index} item={item} />)}
    </>
  );
});
