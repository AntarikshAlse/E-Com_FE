import { SearchOutlined } from '@mui/icons-material';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import stitches from "../stitches";

const { styled } = stitches;

const Container = styled('div',{
    maxHeight:'20em',
    width:'15em',
    position:'relative',
    '@bp1':{flex:'initial',width:'auto'}
});
const Image = styled('img',{
    height:'100%',
    width:'100%',
     objectFit:'cover',
    
});
const Info = styled('div',{
    position:'absolute',
    inset:'0 0',
    display: 'flex',
    flexWrap:'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover':{
        backgroundColor:'rgba(229, 229, 229, 0.5)',
        transition: 'all 0.4s ease'
    }
});
const Icon = styled('div',{
    height:'1em',
    width:'1em',
    borderRadius:'50%',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
    padding: '10px',
    '&:hover':{
        transform:'scale(1.1)',
        transition: 'all 0.4s ease'
    },
    margin:'0.2em',
    cursor:'pointer',
});
const ProductItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img} alt="Product Image"/>
        <Info>
            <Icon><SearchOutlined/></Icon>
            <Icon><ShoppingCartOutlined/></Icon>
            <Icon><FavoriteBorderOutlined/></Icon>
        </Info>
    </Container>
  )
}

export default ProductItem