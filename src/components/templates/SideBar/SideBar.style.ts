import styled from 'styled-components';

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
  padding: 0.75rem 0;
`;

export const Header = styled.div`
  flex: 1;
  background: ${({theme}) => theme.color.white};
  border: 1px solid ${({theme}) => theme.color.gray.light};
  border-radius: 0.25rem;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  margin-bottom: 1rem;
  background: ${({theme}) => theme.color.white};
  border: 1px solid ${({theme}) => theme.color.gray.light};
  border-radius: 0.25rem;
`;
