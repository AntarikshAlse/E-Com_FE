import React from 'react'
import { styled } from '@stitches/react';

const Container = styled('div',{
    height:'30px',
    backgroundColor:'teal',
    color:'white',
    display:'flex',
    alignItems:'center',
    fontSize:'14px',
    fontWeight:'bold',
    justifyContent: 'center',
});
const Announcement = () => {
  return (<>
        <Container>
            Super Deal! Get Everything at 50% discount
        </Container>
    </>)
}

export default Announcement