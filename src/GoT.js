import React, { Component } from 'react'
import axios from 'axios';

export default class GoT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 1,
            characters: []
        };
    }

    componentDidMount() {
        this._getCharactersForPage();
    }

    render() {
        const style = {
            background: '#CC167D',
        
        }
        return (
        <div style={style}>
            <h2>GAME TIME</h2>
            <ul>
            <li>{this.state.characters}</li>
            
            </ul>
        </div>
        )
    }
    _getCharactersForPage = async () => {
        const response = await axios.get(`https://www.anapioficeandfire.com/api/characters?page=${this.state.pageNumber}&pageSize=10`)
            console.log(response.data[1].name)
            this.setState({
                characters: response.data[1].name
            })
            
    }
}


