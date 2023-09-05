import styled from 'styled-components';

export const ListItem = styled.li`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: -3px -3px 3px #e6dc13, 3px 3px 3px #385fe6;
  transform: scale(1);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.06);
  }
`;

export const Picture = styled.img`
  height: 350px;
`;
