import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card } from './Card'
import { CardTitle } from './CardTitle'
import { CategoryImage } from './CategoryImage'

export default class CategoryCard extends Component {
    render() {
        return(
            <Link to={ '/category/' + this.props.category }>
                <Card small category={ this.props.category }>
                    <CardTitle>{ this.props.title }</CardTitle>
                    <CategoryImage src={ require(`../style/images/${ this.props.category }.png`) } />
                </Card>
            </Link>    
        )
    }
}