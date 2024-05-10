import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hook/useFetch';
import ProdInfo from '../components/prodid/ProdInfo';
import './style/prodid.css'
import ProdSlider from '../components/prodid/ProdSlider';
import ProdSimiliar from '../components/prodid/ProdSimiliar';

const Prodid = () => {

  const [product, getProduct] = useFetch();

  const params = useParams();

  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${params.id}`
    getProduct(url);

  }, [params.id])

  return (
    <section className='prodid'>
      <ProdSlider
        product={product}
      />
      <ProdInfo
        product={product}
      />
      <ProdSimiliar
        product={product}
      />

    </section>
  )
}

export default Prodid;