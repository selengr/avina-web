import './styles/style.css';
import styled from 'styled-components/macro';
import * as React from 'react';
import { memo } from 'react';

interface Props {
  active?: boolean;
  size?: 'mobile' | 'web';
  style?: any;
  name: React.ReactNode;
  id?: string;
}

export const Icons = memo(({ id, name, style, size, active }: Props) => {
  return (
    <div
      id={id}
      style={
        size === 'mobile'
          ? { fontSize: `24px`, width: '24px', height: '24px' }
          : {
              fontSize: '32px',
              width: '32px',
              height: '32px',
            }
      }>
      <Icon style={style} className={`icon ico-${name}${active ? '-Focused' : ''}`} />
    </div>
  );
});

const Icon = styled.div``;
