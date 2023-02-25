import styled from 'styled-components';

export const NavMenu = styled.header`
  width: 100%;
  height: 6rem;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.nav`
  color: rgb(73, 25, 15);
  width: 100%;
  height: 55%;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  line-height: 2rem;
  padding: 0 1.5rem;
  box-shadow: 0 2px 3px 0px rgba(204, 204, 204, 0.3);
`;

export const Title = styled.div`
  flex-basis: ${({ variant }) => (variant === 'outline' ? '30%' : '70%')};
  flex-grow: ${({ variant }) => (variant === 'outline' ? '1' : '0')};
  flex-shrink: ${({ variant }) => (variant === 'outline' ? '0' : '1')};
  display: flex;
  justify-content: ${({ variant }) => (variant === 'outline' ? 'flex-end' : 'flex-start')};
  gap: 2rem;
  font-size: ${({ variant }) => variant === 'outline' && '1.2rem'};
  filter: ${({ variant }) => variant === 'outline' && 'brightness(10%) contrast(30%)'};
`;

export const Footer = styled.nav`
  width: 100%;
  height: 45%;
  padding-left: 1.5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-content: center;
`;

export const Section = styled.article`
  height: 2.7rem;
  grid-column-start: ${({ variant }) =>
    variant === 'tools' || variant === 'management' ? 'span 1' : 'span 3'};
  display: flex;
  gap: 1rem;
  justify-content: ${({ variant }) =>
    variant === 'tools'
      ? 'space-evenly'
      : variant === 'management'
      ? 'space-around'
      : 'flex-start'};
  background: ${({ variant }) => variant === 'management' && 'rgb(73, 25, 15)'};
`;

export const IconBtn = styled.button`
  color: ${({ variant }) => (variant === 'iconMgt' ? '#fff' : 'rgb(73, 25, 15)')};
  font-size: 1rem;
  border: none;
`;
