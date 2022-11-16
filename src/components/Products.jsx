import {styled} from '@stitches/react';
import {productsItems} from '../data';
import ProductItem from './ProductItem';
const Container = styled('div',{
   /*  display:'grid',
    gridGap: '4rem',
    padding:'1.4em',
    gridTemplateColumns:'repeat(auto-fit,12rem)' */
    display:'flex',
    flexWrap:'wrap',
    padding: '1rem',
    gap:'.6rem',
    justifyContent: 'space-between',
});

const Products = () => {
  return (
   <Container>
    {productsItems.map(product =>(
        <ProductItem
        item={product}
        key={product.id}
        />
    ))}
   </Container>
  )
}

export default Products