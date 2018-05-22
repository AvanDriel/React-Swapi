import React, { Component } from 'react';
import CategoryCard from '../components/CategoryCard'
import { CardWrapper } from '../components/CardWrapper'

export default class CategoryOverview extends Component {
    render() {
        return(
            <div className="backgroundDiv">
                <CardWrapper>
                    <CategoryCard title='People' category='people' />
                    <CategoryCard title='Starships' category='starships' />
                    <CategoryCard title='Films' category='films' />
                    <CategoryCard title='Species' category='species' />
                    <CategoryCard title='Vehicles' category='vehicles' />
                    <CategoryCard title='Planets' category='planets' />
                </CardWrapper>    
            </div>
        )
    }
}