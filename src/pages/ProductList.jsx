import React from 'react';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import stitches from "../stitches";

const { styled } = stitches;

const Container = styled('div',{});
const FilterContainer = styled('div',{
    display: 'flex',
    //padding: '20px',
    justifyContent: 'space-between',
});
const Title = styled('h1',{
  margin:'1rem'
});
const Filter = styled('div',{
 margin:'1rem',
 '@bp1':{display:'flex',flexDirection:'column'}

});
const FilterText = styled('label',{
  fontSize:'20px',
  fontWeight:'600'
});

const Select = styled('select',{
padding:'15px',
marginLeft:'1em',
'@bp1':{margin:'.6rem 0',}
});
const Option = styled('option',{
padding:'50px',
fontSize:'1.2em',    
});

const ProductList = () => {
  return (
    <Container>
    <Navbar/>
    <Announcement/>
      <Title>Product</Title>
      <FilterContainer>
          <Filter>
            <FilterText for="color">Filter Products :</FilterText>
            <Select id="color">
              <Option disabled value="Color">Color</Option>
              <Option value="White" >White</Option>
              <Option value="Yellow" >Yellow</Option>
              <Option value="Green" >Green</Option>
              <Option value="Blue" >Blue</Option>
              <Option value="Red" >Red</Option>
            </Select>
            <Select>
              <Option disabled value="Size">Size</Option>
              <Option value="XL">XL</Option>
              <Option value="L">L</Option>
              <Option value="M">M</Option>  
              <Option value="S">S</Option>
            </Select>  
          </Filter>
          <Filter>
            <FilterText>Sort Products :</FilterText>
            <Select>
              <Option disabled value="Popularity">Popularity</Option>
              <Option value="Lowset Price" >Lowest Price</Option>
              <Option value="Highest Price ">Highest Price</Option>
            </Select> 
          </Filter>
      </FilterContainer>
    <Products/>
    <NewsLetter/>
    <Footer/>
    </Container>
  )
}

export default ProductList