import React from 'react';
import styled from 'styled-components';

const CheckoutForm = () => {
  return (
    <div>
      <h2>hello from stripe checkout</h2>
    </div>
  );
};

const StripeCheckout = () => {
  return (
    <Wrapper>
      <CheckoutForm />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: peachpuff;
`;

export default StripeCheckout;
