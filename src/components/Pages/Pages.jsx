import './Pages.css';
import Page from '../Page/Page';
import React from 'react';

function Pages(props) {
  const {amount, page} = props;
  const pages = [];

  if (!isNaN(amount) && amount > 0) {
    for (let i = 0; i <= amount; i++) {
      pages.push(i);
    }
  }

  return (
    <div className='pages'>
      {
        pages.map((e) => <Page key={e} id={e} page={page}/>)
      }
    </div>
  );
}

export default Pages;
