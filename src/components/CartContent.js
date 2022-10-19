import styled from 'styled-components';
import CartColumns from './CartColumns';
import CartTotal from './CartTotal';

const CartContent = () => {
  return (
    <Wrapper>
      <CartColumns />
      <CartTotal />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: aquamarine;
`;
export default CartContent;
