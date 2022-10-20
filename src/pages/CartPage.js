import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartContent, PageHero } from '../components';
import { useCartContext } from '../context/cart_context';

const CartPage = () => {
  const { cart } = useCartContext();

  if (cart.length < 1) {
    return (
      <main className="page-100">
        <Wrapper>
          <h2>Your cart is empty</h2>
          <Link to="/products" className="btn">
            fill it
          </Link>
        </Wrapper>
      </main>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  text-align: center;

  h2 {
    text-transform: none;
    margin-bottom: 1rem;
  }
`;
export default CartPage;
