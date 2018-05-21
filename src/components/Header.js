import React from 'react'
import styled from 'styled-components'
import headerLogo from'../style/images/starwars.png'
import { Link } from 'react-router-dom'

const HeaderDiv = styled.div`
    width: 100vw;
    height: 8rem;
    background: #222222;
    position:fixed

    @media (max-width: 1200px) {
        height: 6rem;
    }
    
    @media (max-width: 700px) {
        height: 4rem;
    }
`
const HeaderLogo = styled.img`
    display: block;
    margin: 0 auto;
    height: 4rem;
    padding-top: 2rem;

    @media (max-width: 1200px) {
        height: 3rem;
        padding-top: 1.5rem;
    }
    
    @media (max-width: 700px) {
        height: 2rem;
        padding-top: 1rem;
    }
`
const Header = () => (
    <HeaderDiv>
        <Link to='/'>
            <HeaderLogo src={headerLogo} />
        </Link>
    </HeaderDiv>    
)

export default Header