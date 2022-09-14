import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Error, Loading } from '../components';
import { useProductsContext } from '../context/products_context';
import { single_product_url as url } from '../utils/constants';

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    fetchSingleProduct,
    single_product_error: error,
    single_product_loading: loading,
  } = useProductsContext();

  // fetch product details
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  // redirect after 3 seconds in case of an error
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return <h3>SingleProductPage = {id}</h3>;
};

export default SingleProductPage;
