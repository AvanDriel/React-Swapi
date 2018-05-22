import React, { Component } from 'react';
import '../style/App.css';
import DetailCard from '../components/DetailCard'
import { CardWrapper } from '../components/CardWrapper'
import ScrollingText from '../components/ScrollingText'

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            pages: null
        }
        this.oldArray = []
        this.fetches = 0
    }

    componentDidMount() {
        fetch("https://swapi.co/api/"+this.props.match.params.category+'/')
            .then(res => res.json())
            .then(
                (result) => {
                    var pages = Math.ceil(result.count/10)
                    this.setState({
                        pages: pages
                    })
                    for(var i =1; i <= pages; i++){
                        fetch("https://swapi.co/api/"+this.props.match.params.category+'/?page='+i)
                        .then(res => res.json())
                        .then(
                            (result) => {
                                this.oldArray = this.state.items
                                var newArray = result.results
                                for(var i = 0; i < newArray.length; i++) {
                                    var item = newArray[i]
                                    this.oldArray.push(item)
                                }
                                this.fetches++
                                if(this.fetches === this.state.pages) {
                                    this.setState({
                                        isLoaded: true
                                    })
                                }
                            }
                        )
                    }                    
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )

    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div> Error: { error.message }</div>
        } else if (!isLoaded) {
            return(<ScrollingText toLoad={ this.props.match.params.category }/>)
        } else {
            if(this.props.match.params.category === "films") {
                return(
                    <CardWrapper>
                        { items.map(item => (
                            <DetailCard  key={ item.title } title={ item.title } category={ this.props.match.params.category }/>
                        )) }
                    </CardWrapper>
                )
            }else {
                return(
                    <CardWrapper>
                        { items.map(item => (
                            <DetailCard key={ item.title } title={ item.name } category={ this.props.match.params.category }/>
                        )) }
                    </CardWrapper>
                )
            }
        }
    }
  }
  
  export default Detail;