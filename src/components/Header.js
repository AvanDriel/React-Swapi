import styled from 'styled-components'
//Header. Pretty straightforward
export const Header = styled.div`
    width: 100vw;
    height: 8rem;
    background: #222222;
    position:fixed;
    z-index: 100;

    //Media queries for resizing on different screen sizes
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
