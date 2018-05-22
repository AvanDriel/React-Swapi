import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card } from './Card'
import { CardTitle } from './CardTitle'
export default class DetailCard extends Component {
    render() {
        return(
            <Link to={ '/info/'+this.props.category+'/'+this.props.title+'/' }>
                <Card small>
                    <CardTitle centered>{ this.props.title }</CardTitle>
                </Card>
            </Link>      
        )
    }
}