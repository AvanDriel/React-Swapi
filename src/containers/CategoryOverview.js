import React, { Component } from 'react';
import CategoryCard from '../components/CategoryCard'
import Header from '../components/Header'
import styled from 'styled-components'
import Spacer from '../components/Spacer'

const CardWrapper = styled.div`
    margin-left: 9.5vw;
`

export default class CategoryOverview extends Component {
    render() {
        return(
            <div className="backgroundDiv">
                <Header />
                <Spacer />
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