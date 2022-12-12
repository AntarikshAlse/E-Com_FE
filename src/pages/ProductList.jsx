import Announcement from '../components/Announcement';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import stitches from "../stitches";
import { useLocation } from "react-router-dom";
import React,{ useState,useEffect } from 'react';
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
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters,setFilters] = useState({});
  const [sort,setSort] = useState("newest");
   const handleFilters = (e) => { 
      let value = e.target.value;
      setFilters({...filters, [e.target.name] : value});
    }
  return (
    <Container>
    <Navbar/>
    <Announcement/>
      <Title>{cat}</Title>
      <FilterContainer>
          <Filter>
            <FilterText htmlFor="color">Filter Products :</FilterText>
            <Select id="color" name="color" onChange={handleFilters}>
              <Option disabled value="Color">Color</Option>
              <Option value="white" >White</Option>
              <Option value="yellow" >Yellow</Option>
              <Option value="green" >Green</Option>
              <Option value="blue" >Blue</Option>
              <Option value="red" >Red</Option>
              <Option value="grey" >Grey</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
              <Option disabled value="Size">Size</Option>
              <Option value="XL">XL</Option>
              <Option value="L">L</Option>
              <Option value="M">M</Option>  
              <Option value="S">S</Option>
            </Select>  
          </Filter>
          <Filter>
            <FilterText>Sort Products :</FilterText>
            <Select onChange={e => setSort(e.target.value) }>
              <Option value="newest" >Newest</Option>
              <Option value="low" >Lowest Price</Option>
              <Option value="high">Highest Price</Option>
            </Select> 
          </Filter>
      </FilterContainer>
    <Products cat={cat} filters={filters} sort={sort}/>
    <NewsLetter/>
    <Footer/>
    </Container>
  )
}

export default ProductList