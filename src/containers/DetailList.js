import React, { Component } from 'react';
import '../style/App.css';
import { List } from '../components/List'
import { Card } from '../components/Card'
import { ListItem } from '../components/ListItem'
import ScrollingText from '../components/ScrollingText'

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
            return(<ScrollingText toLoad={ this.props.match.params.name } />)
        } else {
            for (const [key, value] of Object.entries(items)) {
                this.rows.push(<ListItem>{`${ key }: ${ value }`}</ListItem>)
            }
            return ( 
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