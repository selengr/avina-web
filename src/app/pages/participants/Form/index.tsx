import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import 'moment/locale/fa';
import { Card, CardContent, Grid, MenuItem, SelectChangeEvent, Theme, ToggleButton, useTheme, Checkbox, ListItemText } from '@mui/material';
import { Button, DropDown, Tab, Title } from 'components';
import moment from 'moment';
import jMoment from 'moment-jalaali';
import { AddGroupUser } from './group';
import { AddSingleUser } from './single';
import { useDispatch, useSelector } from 'react-redux';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import { Go, Util } from 'utils';
import { getUserList, groupShowList, userAddGroup, userEdit, userInfo, userRegister, userShowOne } from '../Logic';
import { store } from 'redux/store/Store';
import * as Action from 'redux/action/creators';

moment.locale('fa');
jMoment.loadPersian({ dialect: 'persian-modern', usePersianDigits: false });

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}

interface FieldType {
  value: string;
  error: string;
}

export default function Index() {
  const renderAfterCalled = useRef(false);
  const owner_id = Util.extractID();
  const { t } = useTranslation();
  const deviceType = Util.ScreenSize();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [fName, setFName] = useState<FieldType>({ value: '', error: '' });
  const [phoneNumber, setPhoneNumber] = useState<FieldType>({ value: '', error: '' });
  const [groups, setGroups] = useState<any>([]);
  const [selectedGroups, setSelectedGroups] = useState<any>([]);
  const [selectedGender, setSelectedGender] = useState<string>('male');
  const [selectedDate, setSelectedDate] = useState<any>();
  const [tab, setTab] = useState<string>('single');
  const [selectedFile, setSelectedFile] = useState<any>();
  const addUserResponse: any = useSelector<any>((res) => res.userRegister);
  const editUserResponse: any = useSelector<any>((res) => res.userEdit);
  const gender = [
    { id: 1, value: 'male', label: `${t(messages.Input_Global_Male())}` },
    { id: 2, value: 'female', label: `${t(messages.Input_Global_Female())}` },
  ];
  const theme = useTheme();
  const user: any = userInfo();
  const groupList: any = useSelector<any>((res) => res.groupShowList);
  const handleChange = (event: SelectChangeEvent<typeof selectedGroups>) => {
    const {
      target: { value },
    } = event;
    try {
      setSelectedGroups(typeof value === 'string' ? value.split(',') : value);
    } catch (e) {}
  };
  const checkPhone = (data, error) => {
    const regex = /^[0-9\b]+$/;
    const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
      englishNumbers = [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g];
    for (let i = 0; i < 10; i++) {
      data = data.replace(persianNumbers[i], String(i)).replace(englishNumbers[i], String(i));
    }
    if (data === '' || regex.test(data)) {
      setPhoneNumber({ ...phoneNumber, value: `${data}`, error: error });
      if (data === '' || regex.test(data)) {
        setPhoneNumber({ ...phoneNumber, value: `${data}`, error: error });
      }
    }
  };

  const fetchGroups = async () => {
    try {
      // const resultList = await groupHttp.groupList({
      //   owner_id,
      // });
      // setGroups(resultList.data.data.groups);
      groupShowList();
      setGroups(groupList.data.data.groups);
    } catch (error) {
      // console.log('List error: ', error);
    }
  };

  // useEffect(()=>{
  //   try{
  //     setGroups(groupList.data.data.groups);
  //   }catch (e) {
  //    console.log('Error')
  //   }
  // })

  const addUsers = async () => {
    const fileData: any = new FormData();
    fileData.append('import_file', selectedFile);
    fileData.append('owner_id', owner_id);
    fileData.append('groups', String(selectedGroups));
    try {
      await userAddGroup(fileData);
      // await dispatch(UserAddGroup(fileData) as any);
      navigate('/users');
    } catch (error) {
      // console.log('users creation error', error);
    }
  };

  // const getOneUser = async () => {
  //   await dispatch(UserShowOne(qs.parse(location.search, { ignoreQueryPrefix: true }).id, owner_id) as any);
  //
  // };

  useEffect(() => {
    if (!renderAfterCalled.current) {
      if (location.pathname.includes('edit')) {
        userShowOne(qs.parse(location.search, { ignoreQueryPrefix: true }).id).then((r) => r);
      }
      fetchGroups().then((r) => r);
    }
  }, []);

  useEffect(() => {
    try {
      setGroups(groupList.data.data.groups);
    } catch (error) {
      console.log(error);
    }
  });
  useEffect(() => {
    if (location.pathname.includes('edit')) {
      setUserData();
    }
  }, [user]);

  const setUserData = () => {
    try {
      setFName({ ...fName, value: user.data.data.name });
      setPhoneNumber({ ...phoneNumber, value: `0${user.data.data.phone}`, error: '' });
      setSelectedDate(moment(user.data.data.birth).format('YYYY-MM-DD'));
      user.data.data.sex === 1 ? setSelectedGender('male') : setSelectedGender('female');
      if (user.data.data.groups) {
        // const temp: number[] = [];
        const tempNames: string[] = [];
        const temp: any[] = [];
        user.data.data.groups.forEach((item) => {
          temp.push(item.name);
          tempNames.push(item.name);
        });
        // alert(temp);
        setSelectedGroups(temp);
      }
    } catch (error) {
      // console.log('list error: ', error);
    }
  };

  const updateUser = async (data) => {
    try {
      // await dispatch(UserEdit(qs.parse(location.search, {ignoreQueryPrefix: true}).id, data) as any);
      await userEdit(qs.parse(location.search, { ignoreQueryPrefix: true }).id, data);
      // navigate('/users');
      // await userEdit(data);
      // Go.Back();
    } catch (error) {
      // console.log('error in updating user');
    }
  };

  const addSingleUser = async (data) => {
    // await dispatch(UserRegister(data) as any);
    await userRegister(data);
    // Go.Back();
  };

  useEffect(() => {
    try {
      if (addUserResponse.data.success) {
        getUserList().then(() => Go.Back());
        store.dispatch(Action.UserRegister(undefined, 'reset') as any);
      }
      if (editUserResponse.data.success) {
        getUserList().then(() => Go.Back());
        store.dispatch(Action.UserEdit(undefined, undefined, 'reset') as any);
      }
    } catch (e) {}
  }, [addUserResponse, editUserResponse]);

  const submitCreate = async () => {
    const sex = gender.filter((item) => item.value === selectedGender);
    const tempGroups: any = [];
    for (let i in selectedGroups) {
      tempGroups.push(String(groups.find((e) => e.name === selectedGroups[i]).id));
    }
    const data = {
      owner_id,
      phone: phoneNumber.value.substring(1),
      name: fName.value,
      groups: tempGroups,
      sex: sex[0].id,
      birth: moment(selectedDate).format('YYYY-MM-DD'),
    };
    qs.parse(location.search, { ignoreQueryPrefix: true }).id ? await updateUser(data) : await addSingleUser(data);
    Go.Back();
  };
  const GroupSelector = () => {
    return (
      <>
        {groups.length > 0 ? (
          <DropDown
            placeholder={`${t(messages.Alert_ParticipantsForm_Dropdown_ChooseGroup())}`}
            id={'groups'}
            label={`${t(messages.Input_Global_Group())}`}
            value={selectedGroups}
            renderValue={(e) => e.join(', ')}
            onChange={handleChange}
            multiple>
            {groups &&
              [...groups].map((item, i) => {
                return (
                  <MenuItem key={i} value={item.name} style={getStyles(item.id, selectedGroups, theme)}>
                    <Checkbox checked={selectedGroups.indexOf(item.name) > -1} />
                    <ListItemText primary={item.name} />
                  </MenuItem>
                );
              })}
          </DropDown>
        ) : null}
      </>
    );
  };

  const tabChange = (event: React.MouseEvent<HTMLElement>, newTab: string | null) => {
    if (newTab !== null) {
      setTab(newTab);
    }
  };

  return (
    <>
      <Card sx={{ minHeight: '93vh' }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item sx={deviceType === 'mobile' ? { display: 'none' } : { display: 'inline' }}>
              {qs.parse(location.search, { ignoreQueryPrefix: true }).id ? (
                <Title value={`${t(messages.Input_ParticipantsForm_EditParticipant())}`} />
              ) : (
                <Title value={`${t(messages.Input_ParticipantsForm_EditParticipants())}`} />
              )}
            </Grid>
            <Grid item container>
              <Grid item xs={12}>
                <Card variant='outlined' style={{ height: 'calc(93vh - 143px)' }}>
                  <CardContent>
                    <Grid container>
                      <Grid item container xs={12} justifyContent={'flex-end'} sx={qs.parse(location.search, { ignoreQueryPrefix: true }).id ? { display: 'none' } : { display: 'flex' }}>
                        <Grid item md={4} xs={12}>
                          <Tab onChange={tabChange} value={tab}>
                            <ToggleButton value={'single'}>{t(messages.Text_ParticipantsForm_AddSingle())}</ToggleButton>
                            <ToggleButton value={'group'}>{t(messages.Text_ParticipantsForm_AddGroup())}</ToggleButton>
                          </Tab>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        container
                        justifyContent='center'
                        alignItems='center'
                        sx={
                          tab === 'group'
                            ? { display: 'none' }
                            : {
                                display: 'flex',
                                height: 'calc(93vh - 250px)',
                              }
                        }>
                        <AddSingleUser
                          data={gender}
                          name={fName}
                          number={phoneNumber}
                          date={selectedDate}
                          gender={selectedGender}
                          setNameValue={(d) => {
                            setFName({ ...fName, value: d, error: '' });
                          }}
                          setNameError={(e) => {
                            setFName({ ...fName, error: e });
                          }}
                          setNumberValue={(d) => {
                            checkPhone(d, '');
                          }}
                          setNumberError={(e) => {
                            checkPhone(phoneNumber.value, e);
                          }}
                          setDate={setSelectedDate}
                          setGender={setSelectedGender}>
                          <GroupSelector />
                        </AddSingleUser>
                      </Grid>
                      <Grid
                        item
                        container
                        justifyContent='center'
                        alignItems='center'
                        sx={
                          tab === 'single'
                            ? { display: 'none' }
                            : {
                                display: 'flex',
                                height: 'calc(93vh - 257px)',
                                mt: 4,
                              }
                        }>
                        <AddGroupUser file={setSelectedFile}>
                          <GroupSelector />
                        </AddGroupUser>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <Grid item container justifyContent={'center'} spacing={2}>
              <Grid item xs={12} md={2}>
                <Button
                  fullWidth={true}
                  type={'contained'}
                  label={`${t(messages.Input_Global_Submit())}`}
                  onClick={tab === 'single' ? submitCreate : addUsers}
                  disabled={fName.value.length < 1 || phoneNumber.value.length < 1 || selectedGroups.length < 1}
                />
              </Grid>
              <Grid item md={2} sx={deviceType === 'mobile' ? { display: 'none' } : { display: 'inline' }}>
                <Button fullWidth={true} type={'outlined'} label={`${t(messages.Input_Global_Cancel())}`} onClick={() => Go.Back()} />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

/**
 *
 * @param children
 * @param file
 * @constructor
 */
