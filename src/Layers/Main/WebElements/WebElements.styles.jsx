import styled from 'styled-components';

export const Tools = styled.ul`
  grid-column-start: ${(props) => props.variant !== 'hide' && 'span 1'};
  display: ${(props) => (props.variant === 'hide' ? 'none' : 'flex')};
  padding: 1.5rem 0;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  background: #242121;
`;

export const List = styled.li`
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  padding: 0.8rem 0;
  text-align: center;
`;

export const Btn = styled.button`
  border: none;
  font-size: 1.2rem;
  cursor: move;
  color: rgb(158, 152, 151);
`;
