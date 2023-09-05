import { Btn } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <Btn ttype="button" onClick={onClick}>
      Load More
    </Btn>
  );
};
