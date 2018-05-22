import styled from 'styled-components'

export const HeaderLogo = styled.img`
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

    @media (max-width: 350px) {
      height: 1.5rem;
      padding-top: 0.75rem;
    }
`