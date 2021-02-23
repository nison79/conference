import React from "react"
import styled from 'styled-components'
import Header from '../components/header'
import SideHeading from '../components/SideHeading'

export default function Home() {
  return (
    <Container>
      <Header />
        <HeadingContainer>
          <SideHeading />
          <SideCard />
        </HeadingContainer>

  
    </Container>

  )
}


const Container = styled.div`
  box-sizing:border-box;
  padding:0;
  margin:0;
  min-height:100vh;
  background-color:#2D1E2F;

`

const HeadingContainer = styled.div`
  display:flex;

`

const SideCard = styled.div`
  padding:2rem;
  margin:2rem;
  width:800px;
  background:white;

`