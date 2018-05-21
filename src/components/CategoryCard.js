import styled from 'styled-components'
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const Card = styled.div`
    width: 25vw;
    height: 30vh;
    background-color: #282727;
    display: inline-block;
    margin: 1vw;
    text-align: center;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;

    @media (max-width: 1200px) {
        width: 40vw;
    }
    
    @media (max-width: 700px) {
        width: 80vw;
    }
`

const  Title = styled.h1`
    color: white;
    margin-top: 2rem;
`
const CategoryImage = styled.img`
    margin-top: 2rem
`

export default class CategoryCard extends Component {
    render() {
        return(
            <Link to={'/category/' + this.props.category}>
                <Card category={this.props.category}>
                    <Title>{this.props.title}</Title>
                    <CategoryImage src={require(`../style/images/${this.props.category}.png`)} />
                </Card>
            </Link>    
        )
    }
}