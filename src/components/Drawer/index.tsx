import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { Icons, Logo, Menu, RoleSelector, Text } from 'components';
import { Sidebar } from '../common/Sidebar';
import { Card, CardActionArea, CardContent, CardHeader, Drawer, Grid, IconButton } from '@mui/material';
import { Service, Util } from 'utils';
import { messages } from '../messages';
import i18n from 'i18next';
import { Notifications } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { showNotification } from '../../app/pages/Dashboard/Logic';
import { seenNotification } from '../../api/services/adminService';
import * as Types from '../../redux/action/types';

interface Props {
  roleId: number;
  scopeName: string;
  role: any;
  open: boolean;
  onClose?: any;
  roleData: any;
  roleType: number;
}

const NotificationDrawer = ({ open, close, isWeb = false }) => {
  const showNotificationResponse: any = useSelector<any>((res) => res.showNotification.data);
  const [showNotificationData, setShowNotificationData] = useState([]);
  const [seenNotif, setSeenNotif] = useState('');

  useEffect(() => {
    showNotification();
    setShowNotificationData(showNotificationResponse.data);
  }, []);

  const handleClick = async () => {
    const data = {
      id: 1,
    };
    const res = await Service.Request(Types.SEEN_NOTIFICATION_REQUEST, data);
    console.log(res?.data);
  };

  return (
    <Drawer
      anchor={'right'}
      open={open}
      onClose={close}
      sx={{
        width: '250px',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isWeb ? 300 : '250px',
          boxSizing: 'border-box',
          borderRadius: '12px 0 0 12px',
        },
      }}>
      {showNotificationData !== undefined &&
        showNotificationData.map(
          (
            item: {
              title: string | number | readonly string[] | undefined;
              content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
            },
            i: React.Key | null | undefined,
          ) => {
            return (
              <Grid spacing={5} margin={0.5} onClick={handleClick}>
                <Text variant={'web14'} type={'title2'} weight={'bold'} align={'right'}>
                  <CardActionArea>
                    <Card variant='outlined'>
                      <CardHeader title={<Text variant={'web14'}>{item.title}</Text>} dir={'rtl'} />
                      <CardContent>
                        <Grid container spacing={5}>
                          {/*<Grid>*/}
                          {/*  <Drawer*/}
                          {/*    anchor={'right'}*/}
                          {/*    // open={open}*/}
                          {/*    onClose={close}*/}
                          {/*    // sx={{*/}
                          {/*    //   width: '250px',*/}
                          {/*    //   flexShrink: 0,*/}
                          {/*    //   '& .MuiDrawer-paper': {*/}
                          {/*    //     width: isWeb ? 300 : '250px',*/}
                          {/*    //     boxSizing: 'border-box',*/}
                          {/*    //     borderRadius: '12px 0 0 12px',*/}
                          {/*    //   },}}*/}
                          {/*  ></Drawer>*/}
                          {/*</Grid>*/}
                          <Grid
                            item
                            container
                            sx={{
                              textOverflow: 'ellipsis',
                              overflow: 'hidden',
                            }}>
                            <Text variant={'mobile10'} type={'body'} weight={'regular'} align={'right'} style={{ color: '#6a6a6a' }}>
                              {item.content}
                            </Text>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </CardActionArea>
                </Text>
              </Grid>
            );
          },
        )}
    </Drawer>
  );
};

export const StyledWebDrawer = memo(({ role, scopeName, roleId, roleData, roleType, open }: Props) => {
  const [active, setActive] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  return (
<></>
  );
});

export const StyledMobileDrawer = memo(({ onClose, open, role, scopeName, roleId, roleData, roleType }: Props) => {
  const [active, setActive] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);
  return (
  <></>
  );
});

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  overflow: 'hidden !important',
}));
