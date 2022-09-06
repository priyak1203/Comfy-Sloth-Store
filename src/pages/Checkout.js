import styled from 'styled-components';
import { PageHero } from '../components';

const Checkout = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        <h1>Checkout Page</h1>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div``;
export default Checkout;
