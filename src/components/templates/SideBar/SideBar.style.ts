import styled, {css} from 'styled-components';

// div
export const Container = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 1rem;

  min-width: 17.5rem;
  height: 100%;
`;

export const HeaderArea = styled.div`
  height: ${({theme}) => theme.size.header}px;
  padding: ${({theme}) => theme.space.rem.narrow}rem 0;
`;

const floatStyle = css`
  background: ${({theme}) => theme.color.white.default};
  border: 1px solid ${({theme}) => theme.color.gray.light};
  border-radius: 0.25rem;
  box-shadow: 0px 2px 4px 2px ${({theme}) => theme.color.black.dim};
`;

export const Header = styled.div`
  flex: 1;
  padding: 0 ${({theme}) => theme.space.rem.normal}rem;
  ${floatStyle}
`;

export const Body = styled.div`
  flex: 1;
  margin-bottom: 1rem;
  ${floatStyle}
`;
