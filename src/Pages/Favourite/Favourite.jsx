import Cards from '../../components/Cards/Cards';
import store from '../../redux/store/store';
import React from 'react';

function Favourite() {
  return (
    <div>
      <Cards beers={store.getState().favourite} />
    </div>
  );
}

export default Favourite;
