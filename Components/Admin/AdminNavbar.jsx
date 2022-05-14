import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Nav = styled.nav`
    transform: translateY(-50%);
    left: 0;
    top: 50%;
    position: absolute;
    height: 14rem;
    width: 2rem;
    background-color: red;
    border-radius: 0 10px 10px 0;
`

export default function AdminNavbar() {
  return (
    <Nav>
        <FontAwesomeIcon icon={faBookmark} />
    </Nav>
  )
}
