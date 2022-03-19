import React from 'react';
import { useParams } from 'react-router-dom';
import MenuCard from '../MenuCard/MenuCard'
import Pages from '../Pages/Pages';
import './Cards.css'

function Cards(props) {
    const { beers = [] } = props
    let page = useParams().pageNumber;
    if (!page) {
        page = '0';
    }

    return (
        <div className='cards'>
            <div className='cards__content'>
                {beers ? beers.slice(page*9, page*9+9).map(beer => <MenuCard name={beer.name} description={beer.brewers_tips} id={beer.id} key={beer.id} />) : null}
            </div>
            {beers ? <Pages amount={Math.floor(beers.length / 9)} page={page}  /> : null}
        </div>
    )
}

export default Cards