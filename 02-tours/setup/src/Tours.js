import React from 'react';
import Tour from './Tour';
const Tours = (props) => {
  const { tours, removeTour } = props;
  return (<section>
    <div className='title'>
      <h2>Our tours</h2>
      <div className='underline'></div>
    </div>
    <div>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={(id) => removeTour(id)} />
      })}
    </div>
  </section>);
};

export default Tours;
