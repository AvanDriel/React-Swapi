import React, { Component } from 'react';
import '../style/App.css';
import { List } from '../components/List'
import { Card } from '../components/Card'
import { ListItem } from '../components/ListItem'
import ScrollingText from '../components/ScrollingText'

//List that shows all the specific data about a person, starship etc.
class DetailList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
        this.rows = []
    }

    componentDidMount() {
        // To prevent loading all the items in a category again, search the api for the name in the url
        fetch("https://swapi.co/api/"+this.props.match.params.category+'/?search='+this.props.match.params.name)
            .then(res => res.json())
            .then (
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.results[0]
                    })
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
            return(<ScrollingText toLoad={ this.props.match.params.name } />)
        } else {
            // For each item in the array, make a ListItem and push it to the array
            for (const [key, value] of Object.entries(items)) {
                this.rows.push(<ListItem>{`${ key }: ${ value }`}</ListItem>)
            }
            return ( 
                //Display the List in a Card. List contains all the Listitems stored in this.rows
                <Card detailList >
                    <List>
                        { this.rows }
                    </List>
                </Card>    
            )
        }
    }
}
  
  
  export default DetailList;