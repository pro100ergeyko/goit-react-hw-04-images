import styled from 'styled-components';

export const LoaderBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 219, 145, 0.2);
`;
