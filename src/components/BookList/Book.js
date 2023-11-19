import React, { Component } from 'react'

export default class Book extends Component {
    constructor(props){
        super(props);
        this.state ={
            books: []
        }
    }
    render() {
        return (
            <tr>
                <th>{this.props.title}</th>
                <th>{this.props.author}</th>
                <th>{this.props.year}</th>
            </tr>
        )
    }
}
