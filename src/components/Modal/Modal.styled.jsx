import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ContentModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 650px;
`;

export const ModalDescr = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 10px;
  font-size: 22px;
  width: 100%;
  background-color: rgba(86, 85, 83, 0.953);
  box-shadow: -5px -5px 5px #e6dc13, 5px 5px 5px #385fe6;
  text-align: center;
  color: #000;
  font-weight: 600;
`;

export const ModalPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
