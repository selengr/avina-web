import { UserInfo, UserItem, UserRemove, UserStatus } from 'components';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';

interface Props {
  item: any;
  checked: boolean;
  checkItems: any;
  cancelAssignment: any;
}

export default function Items({ item, checkItems, checked, cancelAssignment }: Props) {
  const { t } = useTranslation();
  return (
    <UserItem>
      <UserInfo data={item} isChecked={checked} checkItems={checkItems} />
      <UserStatus
        data={item}
        Label={
          item.test_status === 3 ? (
            `${t(messages.Input_Global_TestComplete())}`
          ) : (
            <>
              {item.test_status === 2 && `${t(messages.Input_Global_TestCompleting())}`}
              {item.test_status === 1 && `${t(messages.Input_Global_TestNotComplete())}`}
            </>
          )
        }>
        <UserRemove status={item} handle={cancelAssignment} />
      </UserStatus>
    </UserItem>
  );
}
