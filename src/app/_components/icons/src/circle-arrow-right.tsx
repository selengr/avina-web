import BaseIcon from '@/app/_components/icons/base-icon';
import { SvgIconType } from '@/app/_components/icons/icon.types';

export default function SvgIcon(props: SvgIconType) {
  return (
    <BaseIcon {...props}>
      <path d="M35.5 18.0322C35.5 27.6922 27.66 35.5322 18 35.5322C8.34 35.5322 0.5 27.6922 0.5 18.0322C0.5 8.37223 8.34 0.532227 18 0.532227C27.66 0.532227 35.5 8.37223 35.5 18.0322ZM4 18.0322C4 25.7672 10.265 32.0322 18 32.0322C25.735 32.0322 32 25.7672 32 18.0322C32 10.2972 25.735 4.03223 18 4.03223C10.265 4.03223 4 10.2972 4 18.0322ZM25 18.0322L18 11.0322L15.5325 13.4997L18.2975 16.2822H11V19.7822H18.2975L15.515 22.5647L18 25.0322L25 18.0322Z" />
    </BaseIcon>
  );
}
