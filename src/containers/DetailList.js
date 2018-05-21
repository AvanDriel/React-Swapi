import React, { Component } from 'react';
import '../style/App.css';

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
            return(<div>Loading..</div>)
        } else {
            for (const [key, value] of Object.entries(items)) {
                console.log(`${key}: ${value}`)
                this.rows.push(<li>{`${key}: ${value}`}</li>)
            }
            return (
                <ul>
                    { this.rows }
                </ul>
            )
        }
    }
}
  
  
  export default DetailList;