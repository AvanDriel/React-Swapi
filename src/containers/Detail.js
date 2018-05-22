import React, { Component } from 'react';
import '../style/App.css';
import DetailCard from '../components/DetailCard'
import { CardWrapper } from '../components/CardWrapper'
import ScrollingText from '../components/ScrollingText'

//Class that returns all entries in a category
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
        //fetch the fist page to see how many items there are
        fetch("https://swapi.co/api/"+this.props.match.params.category+'/')
            .then(res => res.json())
            .then(
                (result) => {
                    //There are 10 items on every page, calculate amount of pages and store it in the state
                    var pages = Math.ceil(result.count/10)
                    this.setState({
                        pages: pages
                    })
                    //For every page, fetch the entries
                    for(var i =1; i <= pages; i++){
                        fetch("https://swapi.co/api/"+this.props.match.params.category+'/?page='+i)
                        .then(res => res.json())
                        .then(
                            (result) => {
                                this.oldArray = this.state.items
                                var newArray = result.results
                                //for every page, loop through the entries and push it to the array
                                for(var i = 0; i < newArray.length; i++) {
                                    var item = newArray[i]
                                    this.oldArray.push(item)
                                }
                                this.fetches++
                                //if the amount of fetches is equal to the pages, everything is loaded
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
            //ScrollingText is displayed when loading. It gives the item to load from the url to the loLoad prop
            return(<ScrollingText toLoad={ this.props.match.params.category }/>)
        } else {
            //for every category the "title" is item.title, except for films where it is title
            if(this.props.match.params.category === "films") {
                return(
                    <CardWrapper>
                        {/* for each item, retun a detail card */}
                        { items.map(item => (
                            <DetailCard  key={ item.title } title={ item.title } category={ this.props.match.params.category }/>
                        )) }
                    </CardWrapper>
                )
            }else {
                return(
                    <CardWrapper>
                        {/* for each item, retun a detail card */}
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