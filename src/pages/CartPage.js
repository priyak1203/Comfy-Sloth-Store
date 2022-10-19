import styled from 'styled-components';
import { CartContent, PageHero } from '../components';

const CartPage = () => {
  return (
    <Wrapper>
      <PageHero title="cart" />
      <CartContent />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background-color: pink;
`;
export default CartPage;
