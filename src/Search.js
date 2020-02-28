import React, { Component } from 'react';
import List from './List';
import request from 'superagent';


export default class Search extends Component {
    state = {
        characters: [],
        input: '',
    }

    handleSearch = async () => {
        const rickAndMortyData = await request.get(`https://peaceful-brushlands-52117.herokuapp.com/?name=${this.state.input}`)
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
