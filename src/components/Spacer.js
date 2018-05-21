import React from 'react'
import styled from 'styled-components'

const SpacerDiv = styled.div`
    width: 100vw;
    height: 8rem;

    @media (max-width: 1200px) {
        height: 6rem;
    }
    
    @media (max-width: 700px) {
        height: 4rem;
    }
`

const Spacer = () => (
    <SpacerDiv />    
)

export default Spacer