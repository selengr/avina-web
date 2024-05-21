import { media, sizes } from '../media';
import { css } from 'styled-components/macro';

describe('media', () => {
  it('should return media query in css', () => {
    const mediaQuery = `${media.small()}{color:red;}`;
    const cssVersion = css`
      @media (min-width: ${sizes.small}px) {
        color: blue;
      }
    `.join('');
    expect(mediaQuery).toMatch(cssVersion);
  });
});
