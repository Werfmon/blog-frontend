import React from 'react'
import styled from 'styled-components'
import AvatarImage from '../public/avatar.jpg'
import Image from 'next/image'

const Frame = styled(Image)`
    border-radius: 50%;
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`



export default function Avatar({size}) {
  return (
      <Container>
         <Frame height={size} width={size} src={AvatarImage} />
      </Container>
  )
}
