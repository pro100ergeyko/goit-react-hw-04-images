import { Text, Wrapper } from './ImageErrorOpen.styled';

export function ImageErrorOpen({ message }) {
  return (
    <Wrapper role="alert">
      <Text>{message}</Text>
    </Wrapper>
  );
}
