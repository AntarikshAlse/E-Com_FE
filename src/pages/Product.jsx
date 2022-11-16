import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import { Remove } from '@mui/icons-material';
import { Add } from '@mui/icons-material';

import stitches from "../stitches";

const { styled } = stitches;
const Container = styled('div',{});
const Wrapper = styled('div',{
    display:'flex',
    //flexWrap:'wrap', //wrap at media query mobile
    padding:'0.6rem',
    '@bp1':{flexDirection:'column'}

});
const Image = styled('img',{
maxHeight:'60vh',
width:'100%',
objectFit: 'cover',
});
const Title = styled('h2',{});
const Desc = styled('p',{});
const InfoContainer = styled('div',{
    display:'flex',
    flexDirection:'column',
    padding:'0 2rem 1rem 1rem',
    '@bp1':{padding:'1rem 1rem 1rem 0'}


});

const Price = styled('span',{
    fontWeight:'100',
    fontSize:'2.5rem',
    marginTop:'.5em'
});
//Filter
const FilterContainer = styled('div',{
    display:'flex',
    justifyContent:'space-between',
    margin:'1.8em 0'

});
const Filter = styled('div',{
    display:'flex',
    alignItems:'center',

});
const FilterTitle = styled('span',{
    fontSize:'1.5rem',
    fontWeight:'200',
    marginRight:'0.5em'
});
const FilterColor = styled('div',{
    width:'1.2em',
    height:'1.2em',
    borderRadius:'50%',
    margin:'0 .2rem',
    backgroundColor: '$$bg'
    
});
const FilterSize = styled('select',{
    padding:'.8em',


});
const Option = styled('option',{
    padding:'1em',
});
//add
const AddContainer = styled('div',{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between'
});

const AmountContainer = styled('div',{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
});

const Amount = styled('span',{
    padding:'.6em 1em',
    border:'1px solid teal',
    borderRadius:'20%',
    display:'flex',
    alignItems:'center',    
});
const Button = styled('button',{
    padding:'1em',
    border:'2px solid teal',
    backgroundColor:'white',
    cursor:'pointer',
    '&:hover':{
        backgroundColor:'#f8f4f4'
    }
});
const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Image src='/images/NewArrivals1.jpg' alt='Product Image'/>
            <InfoContainer>
                <Title>
                    Product Title
                </Title>
                <Desc>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur delectus quod placeat aperiam! Est, 
                    deleniti!
                </Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor css={{$$bg:'black'}}/>
                        <FilterColor css={{$$bg:'darkblue'}}/>
                        <FilterColor css={{$$bg:'gray'}}/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                        <Option >XL</Option>
                        <Option >L</Option>
                        <Option >M</Option>
                        <Option >S</Option>
                        </FilterSize>
                    </Filter>
                </FilterContainer>

                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default Product