import React from 'react'
import styled from 'styled-components'

const SideHeading = () => {
  return (
    <Container>
      <Title>The Future <br/> Shoot <br/><span>Here</span></Title>

      <Title2>December 20-23,2021 JOIN </Title2>

      <Parag>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugiat quibusdam illo dolorem vel ullam deleniti expedita qui libero eaque velit facere natus, aut quo animi, blanditiis est possimus totam.</Parag>

    </Container>
  )
}

export default SideHeading


const Container = styled.div`
  
  padding:4rem;
  display:flex;
  flex-direction:column;

`

const Title = styled.h1`
  font-size:4rem;
  font-family:'Poppins' ,sans-serif;
  color:#F0386B;
  line-height:1;
  padding-left:2rem;

`

const Title2 = styled.h1`
  font-size:1.5rem;
  font-family:'Poppins' ,sans-serif;
  color:#F0386B;
  padding-left:2rem;

`

const Parag = styled.h1`
  font-size:0.8rem;
  font-family:'Poppins' ,sans-serif;
  color:#F0386B;
  padding-left:2rem;
`