import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Error, Loading } from '../components';
import { useProductsContext } from '../context/products_context';
import { single_product_url as url } from '../utils/constants';

const SingleProductPage = () => {
  const {
    fetchSingleProduct,
    single_product_error: error,
    single_product_loading: loading,
  } = useProductsContext();
  const { id } = useParams();
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return <h3>SingleProductPage = {id}</h3>;
};

export default SingleProductPage;
