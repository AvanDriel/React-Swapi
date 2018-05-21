import styled from 'styled-components'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Card = styled.div`
    width: 25vw;
    height: 30vh;
    background-color: black;
    display: inline-block;
    margin: 4px;
    text-align: center;
`

const  Title = styled.h1`
    color: white
`
export default class DetailCard extends Component {
    render() {
        return(
            <Link to={'/info/'+this.props.category+'/'+this.props.title+'/'}>
                <Card>
                    <Title>{this.props.title}</Title>
                </Card>
            </Link>      
        )
    }
}