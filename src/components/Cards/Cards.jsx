import React from 'react';
import {useParams} from 'react-router-dom';
import MenuCard from '../MenuCard/MenuCard';
import Pages from '../Pages/Pages';
import './Cards.css';

function Cards(props) {
  const {beers = []} = props;
  let page = useParams().pageNumber;
  if (!page) {
    page = '0';
  }
  const resultsFound = () => {
    return beers ? beers.length ? true : false : false;
  };

  return (
    <div className='cards'>
      <div className='cards__content'>
        {resultsFound() ? beers.slice(page * 9, page * 9 + 9).map((beer) =>
          <MenuCard
            name={beer.name}
            description={beer.brewers_tips}
            id={beer.id}
            key={beer.id}
          />) :
          <div className='cards__notfound'>SORRY, WE HAVE NO SUCH BEER</div>}
      </div>
      {resultsFound() ?
      <Pages amount={Math.floor(beers.length / 9)} page={page} /> : null}
    </div>
  );
}

export default Cards;
