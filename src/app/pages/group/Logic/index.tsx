import { Service, Util } from 'utils';
import * as Types from 'redux/action/types';
import { useSelector } from 'react-redux';
import i18n from 'i18next';
import { messages } from '../messages';
import * as Action from 'redux/action/creators';
import { store } from 'redux/store/Store';

let itemID = 0;
const owner_id = Util.extractID();
export const getGroupList = async (state?) => {
  const data = {
    owner_id,
    sort_by: 'id',
    order: 'desc',
    name: state ? state.name : '',
    page: state ? state.pageNumber : 1,
    per_page: 12,
  } as const;
  await Service.Request(Types.GROUP_SHOWLIST_REQUEST, data);
};
export const getGroupShowOne = (pageID) => {
  Service.Request(Types.GROUP_SHOWONE_REQUEST, pageID, owner_id);
};
export const getAllUsers = async (userState?) => {
  const data = {
    owner_id,
    group_id: [],
    per_page: 10,
    add_to_group: userState ? userState.add_to_group : null,
    page: userState ? userState.pageNumber : 1,
    name: userState ? userState.name : '',
    scope_name: userState ? userState.scope_name : '',
  } as const;
  await Service.Request(Types.ALLUSERS_SHOWLIST_REQUEST, data);
};
export const getUserList = async (state?) => {
  const data = {
    owner_id,
    group_id: state ? state.groupId : [],
    page: state ? state.pageNumber : 1,
    name: state ? state.name : '',
    per_page: 50,
  } as const;
  await Service.Request(Types.USER_SHOWLIST_REQUEST, data);
};

export const groupCreat = async (data) => {
  await Service.Request(Types.GROUP_CREATE_REQUEST, data);
};
export const groupEdit = async (id, data) => {
  await Service.Request(Types.GROUP_EDIT_REQUEST, id, data);
};
export const addNewUsers = (users, allUsers, checkedNewUsers, addedUsers) => {
  try {
    const tempAddUsers: any[] = users;
    const tempAllUsers: any[] = allUsers;
    for (let i = 0; i < checkedNewUsers.length; i++) {
      tempAddUsers.push(tempAllUsers.filter((obj) => obj.id === checkedNewUsers[i])[0]);
    }
    const temp: any[] = tempAddUsers.reduce((unique, o) => {
      if (!unique.some((obj) => obj.id === o.id)) {
        unique.push(o);
        Service.Alert(
          true,
          'success',
          checkedNewUsers.length === 1 ? `${i18n.t(messages.Alert_Global_Success_AddParticipant())}` : `${i18n.t(messages.Alert_GroupForm_Success_AddParticipants())}`,
          'Done',
        );
      } else {
        if (checkedNewUsers.length > 1) {
          Service.Alert(true, 'error', `${i18n.t(messages.Alert_GroupForm_AddUser_AddMultipleUsersToGroup())}`, 'Alert');
        } else {
          Service.Alert(true, 'error', `${i18n.t(messages.Alert_GroupForm_AddUser_AddUserToGroup())}`, 'Alert');
        }
      }
      return unique;
    }, []);
    return temp;
    // dispatch(
    //   setAlert(true, 'success', checkedNewUsers.length === 1 ? `${t(messages.Alert_Global_Success_AddParticipant())}` : `${t(messages.Alert_GroupForm_Success_AddParticipants())}`, 'Done') as any,
    // );
  } catch (error) {
    //todo :check pls
    // console.log('error in get one group', error);
    // dispatch(setAlert(true, 'error', checkedNewUsers.length === 1 ? `${t(messages.Alert_Global_Error_AddParticipant())}` : `${t(messages.Alert_GroupForm_Error_AddParticipants())}`, 'Done') as any);
  }
};

// export const UserShowList = async (state?) => {
//   const data = {
//     owner_id,
//     group_id: qs.parse(location.search, { ignoreQueryPrefix: true }).id,
//     name: state.name,
//     sort_by: 'id',
//     order: 'desc',
//     page: state.pageNumber,
//     per_page: 50,
//   } as const;
//   try {
//     await Service.Request(Types.USER_SHOWLIST_REQUEST, data);
//   }
//     setUsers(resultList.data.data.users);
//     setTotalPages(resultList.data.pagination.last_page);
//   } catch (error) {
//     // console.log('list error: ', error);
//   };

export const groupsList = () => {
  return useSelector<any>((res) => res.groupShowList);
};
export const removeDialog = (id?) => {
  Service.Prompt(`${i18n.t(messages.Input_GroupList_DeleteGroup())}`);
  itemID = id;
};
// export const AlertAddUser = async (checkedNewUsers) => {
//   console.log('alaki3');
//   await Service.Alert(true, 'success', checkedNewUsers.length === 1 ? `${i18n.t(messages.Alert_Global_Success_AddParticipant())}` : `${i18n.t(messages.Alert_GroupForm_Success_AddParticipants())}`, 'Done');
//   console.log('alaki4');
//  };
export const removeItem = async () => {
  Service.Prompt('');
  await Service.Request(Types.GROUP_DELETE_REQUEST, { owner_id: owner_id, groups: [itemID] });
  store.dispatch(Action.GroupDelete(undefined, 'reset') as any);
  await getGroupList();
};

export { getGroupList as refreshGroupList, getUserList as refreshUserList, getAllUsers as refreshAllUsers };
