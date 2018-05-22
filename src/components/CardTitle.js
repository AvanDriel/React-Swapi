import styled, { css } from 'styled-components'
import { Card } from './Card'
//Title for in the cards
export const  CardTitle = styled.h1`
    color: white;
    margin-top: 2rem;
    -webkit-transition: all 1s;
    transition: all 1s;

    //When a card is hovered, transform the title to be bigger
    ${Card}:hover & {
      transform: scale(1.1, 1.1);
      transition: all 1s;
      -webkit-transition: all 1s;
    }

    //Special css for the cards that don't have a image in them
    ${props => props.centered && css`
      position: absolute;
      text-align: center;
      bottom: 2rem;
      width: 100%;
      margin-bottom: 1em;
  `}
`