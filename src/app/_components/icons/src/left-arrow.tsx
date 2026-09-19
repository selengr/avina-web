import BaseIcon from '@/app/_components/icons/base-icon';
import { SvgIconType } from '@/app/_components/icons/icon.types';

export default function SvgIcon(props: SvgIconType) {
  return (
    <BaseIcon {...props}>
      <path d="M15 21.17C14.81 21.17 14.62 21.1 14.47 20.95L7.95003 14.43C6.89003 13.37 6.89003 11.63 7.95003 10.57L14.47 4.05C14.76 3.76 15.24 3.76 15.53 4.05C15.82 4.34 15.82 4.82 15.53 5.11L9.01003 11.63C8.53003 12.11 8.53003 12.89 9.01003 13.37L15.53 19.89C15.82 20.18 15.82 20.66 15.53 20.95C15.38 21.09 15.19 21.17 15 21.17Z" />
    </BaseIcon>
  );
}
