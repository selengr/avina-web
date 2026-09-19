import BaseIcon from '@/app/_components/icons/base-icon';
import { SvgIconType } from '@/app/_components/icons/icon.types';

export default function SvgIcon(props: SvgIconType) {
  return (
    <BaseIcon {...props}>
      <path d="M0.5 18.0322C0.5 27.6922 8.34 35.5322 18 35.5322C27.66 35.5322 35.5 27.6922 35.5 18.0322C35.5 8.37223 27.66 0.532227 18 0.532227C8.34 0.532227 0.5 8.37223 0.5 18.0322ZM32 18.0322C32 25.7672 25.735 32.0322 18 32.0322C10.265 32.0322 4 25.7672 4 18.0322C4 10.2972 10.265 4.03223 18 4.03223C25.735 4.03223 32 10.2972 32 18.0322ZM11 18.0322L18 11.0322L20.4675 13.4997L17.7025 16.2822H25V19.7822H17.7025L20.485 22.5647L18 25.0322L11 18.0322Z" />
    </BaseIcon>
  );
}
