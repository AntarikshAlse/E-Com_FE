import React from 'react';
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import stitches from "../stitches";

const { styled } = stitches;

const  Container = styled('div',{
    display: 'flex',
    justifyContent: 'space-between',
    padding:'1rem',
    '@bp1':{flexDirection:'column',padding:'0.6rem'}
});
const Categories = () => {
  return (
    <Container>
        {categories.map(item =>(
            <CategoryItem
            item={item} key={item.id}
            />
        ))}
    </Container>
  )
}

export default Categories