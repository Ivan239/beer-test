import React from 'react';

const TakePageNumber = ({match}) => {
  return <div>{console.log(match.params.pageNumber)}</div>;
};

export default TakePageNumber;
