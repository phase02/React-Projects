import React, { useState } from 'react';

const Tour = (props) => {
  const { id, image, info, price, name, removeTour } = props;
  const [readMore, setReadMore] = useState(false);

  return (<article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>${price}</h4>
      </div>
      <p>{readMore ? info : `${info.substring(0, 200)}...`}
        <button type='button' onClick={() => setReadMore(!readMore)} > {readMore ? 'show less' : 'show more'}</button>
      </p>
      <button className="delete-btn" onClick={() => removeTour(id)}>Not interested</button>
    </footer>
  </article >
  )
};

export default Tour;