import styled, { css } from 'styled-components'

export const Card = styled.div`
    width: 25vw;
    height: 30vh;
    background-color: #282727;
    display: inline-block;
    position: relative;
    margin: 1vw;
    text-align: center;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;

    ${props => props.small && css`
      :hover {
        background-color: 	#3E3D3D
      }

      @media (max-width: 1200px) {
        width: 40vw;
      }
      
      @media (max-width: 700px) {
        width: 80vw;
      }
  `}
    
    ${props => props.detailList && css`
      width: 80vw;
      height: 75vh;
      margin-left: 10vw;

      @media (max-width: 1200px) {
        height: 80vh
      }
      
      @media (max-width: 700px) {
        width: 90vw;
      }
  `}
`