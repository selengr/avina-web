import { UserInfo, UserItem, UserRemove, UserStatus } from 'components';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';

export default function Items(props) {
  const { t } = useTranslation();
  return (
    <UserItem>
      <UserInfo data={props.item} isChecked={props.checked} checkItems={props.checkItems} />
      <UserStatus data={props.item} Label={props.item.test_status === 3 ? `${t(messages.Input_Global_TestComplete())}` : `${t(messages.Input_Global_TestNotComplete())}`}>
        <UserRemove status={props.item} handle={props.cancelAssignment} />
      </UserStatus>
    </UserItem>
  );
}
