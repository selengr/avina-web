import BaseIcon from '@/app/_components/icons/base-icon';
import { SvgIconType } from '@/app/_components/icons/icon.types';

export default function SvgIcon(props: SvgIconType) {
  return (
    <BaseIcon {...props}>
      <path
        d="M18.5 5.29004C15.9 9.84004 10.89 12.45 5.67 11.98L2.5 11.69"
        strokeMiterlimit="10"
      />
      <path
        d="M5.5 19.8698C8.1 15.3198 13.11 12.7098 18.33 13.1798L21.5 13.4698"
        strokeMiterlimit="10"
      />
      <path
        d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z"
        strokeMiterlimit="10"
      />
      <path
        d="M7.62988 3.5L10.8099 7.45C12.9399 10.09 14.4499 13.16 15.2499 16.45L16.4599 21.44"
        strokeMiterlimit="10"
      />
    </BaseIcon>
  );
}
