import BaseIcon from '@/app/_components/icons/base-icon';
import { SvgIconType } from '@/app/_components/icons/icon.types';

export default function SvgIcon(props: SvgIconType) {
  return (
    <BaseIcon {...props}>
      <path
        d="M11.9998 2.5H8.6998C6.7998 2.5 5.2998 4 5.2998 5.8C5.2998 7.6 6.7998 9.1 8.5998 9.1H11.9998V2.5Z"
        strokeMiterlimit="10"
      />
      <path
        d="M12.0004 9.2002H8.70039C6.90039 9.2002 5.40039 10.7002 5.40039 12.5002C5.40039 14.3002 6.90039 15.8002 8.70039 15.8002H12.0004V9.2002Z"
        strokeMiterlimit="10"
      />
      <path
        d="M12.0004 15.7998H8.70039C6.90039 15.7998 5.40039 17.2998 5.40039 19.0998C5.40039 20.8998 6.90039 22.3998 8.70039 22.3998C10.5004 22.3998 12.0004 20.8998 12.0004 19.0998V15.7998Z"
        strokeMiterlimit="10"
      />
      <path
        d="M12 2.5H15.3C17.1 2.5 18.6 4 18.6 5.8C18.6 7.6 17.1 9.1 15.3 9.1H12V2.5Z"
        strokeMiterlimit="10"
      />
      <path
        d="M15.3 9.2002C17.1 9.2002 18.6 10.7002 18.6 12.5002C18.6 14.3002 17.1 15.8002 15.3 15.8002C13.5 15.8002 12 14.3002 12 12.5002C12 10.7002 13.5 9.2002 15.3 9.2002Z"
        strokeMiterlimit="10"
      />
    </BaseIcon>
  );
}
