import React, { Component } from 'react';
import List from './List';
import request from 'superagent';


export default class Search extends Component {
    state = {
        characters: [],
        input: '',
    }

    handleSearch = async (e) => {
        e.preventDefault();

        const rickAndMortyData = await request.get(`https://peaceful-brushlands-52117.herokuapp.com/api/characters/?search=${this.state.input}`)

        console.log(rickAndMortyData.body)
        this.setState({
            characters: rickAndMortyData.body.results,
        });
    }  
    render() {
        return (
            <div>
                <form onSubmit={this.handleSearch} >
                    <input value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} />
                    <button onClick={this.handleSearch}>Search!</button>
                    <List characters={this.state.characters} />
                </form>
            </div>
        )
    }
}
