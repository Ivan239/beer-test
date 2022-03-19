import React, { Component } from 'react';
import Cards from '../components/Cards/Cards'
import store from '../redux/store/store';
import './Main.css'


export class Main extends Component {

    state = {
        beers: [],
        loading: true,
    };

    componentDidMount() {
        fetch(`https://api.punkapi.com/v2/beers/`)
            .then((response) => response.json())
            .then((data) => this.setState({ beers: data, loading: false }))
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    }

    render() {
        store.subscribe(() => {
            localStorage.setItem('favourites', JSON.stringify(store.getState().favourite))
            console.log(localStorage.getItem('favourites'))
        })

        return (
            <div className='main'>
                <Cards beers={this.state.beers} />
            </div>
        )
    }
}

export default Main