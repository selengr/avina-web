import { memo } from 'react';
import { MenuItem } from '@mui/material';
import { DropDown } from 'components';
import { profileHttp } from 'api';
import { Util } from 'utils';
import { messages } from '../../messages';
import { useTranslation } from 'react-i18next';

interface Props {
  roleId: number;
  roleData: any;
}

const setRole = async (data) => {
  const reqData = {
    owner_id: data.id,
    role_type: data.roleType,
  };
  try {
    const result = await profileHttp.setLastRole(reqData);
    if (result.data.success) {
      await Util.GetMe();
      window.location.reload();
      window.location.href = '/app/';
    }
  } catch (e) {}
};
export const RoleSelector = memo(({ roleId=1, roleData=[{customID:"KFJHKJ"}] }: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <DropDown
        id={'id'}
        placeholder={`${t(messages.Input_ComponentsCommonRoleSelector_Choose())}`}
        value={roleId}
        onChange={(e) => setRole(roleData.filter((item) => item.customID === e.target.value)[0])}>
        {roleData.map((item) => {
          return (
            <MenuItem key={item.customID} value={item.customID}>
              {item.name}
            </MenuItem>
          );
        })}
      </DropDown>
    </>
  );
});
