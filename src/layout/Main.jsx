import React, { Component } from 'react';
import Cards from '../components/Cards/Cards'
import store from '../redux/store/store';
import './Main.css'
import preloader from '../assets/preloader.gif'


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
        })

        return (
            <div className='main'>
                { this.state.loading ? <img src={preloader} alt="loading..." className='main__preloader' /> : <Cards beers={this.state.beers} />}
            </div>
        )
    }
}

export default Main