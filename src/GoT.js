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
        return (
        <div>
            <h2>GAME TIME</h2>
            <ul>
            {this.state.characters.map((c, i) => <li key={i}>{c}</li>)}
            
            </ul>
        </div>
        )
    }
    _getCharactersForPage = async () => {
        const response = await axios.get(`https://www.anapioficeandfire.com/api/characters?page=${this.state.pageNumber}&pageSize=10`)
            console.log(response.data[1].name)
            // this.setState({
            //     characters: response.data[1].name
            // })
            
    }
}


