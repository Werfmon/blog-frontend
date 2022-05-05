import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  align-self: start;
  height: 2rem;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  background-color: unset;
  margin-left: 5px;
  display: flex;
  align-items: center;
`; 

export default function BackButton(props) {
  return (
    <Button onClick={props.action}>{props.children}</Button>
  )
}
