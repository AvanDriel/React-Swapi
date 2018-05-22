import styled from 'styled-components'

export const Header = styled.div`
    width: 100vw;
    height: 8rem;
    background: #222222;
    position:fixed;
    z-index: 100;

    @media (max-width: 1200px) {
        height: 6rem;
    }
    
    @media (max-width: 700px) {
        height: 4rem;
    }

    @media (max-width: 350px) {
        height: 3rem;
    }
`
