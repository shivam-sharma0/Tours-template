import React, { useState } from 'react';

const Tour = ({id,name,info,image,price,removePlace}) => {
  const[readMore,setReadmore]=useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt="" />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{ readMore ?info: info.substring(0,195)
          }..... 
          <button onClick={()=>setReadmore(!readMore)}>{readMore ?"Show Less":"Read More"}</button>
          </p>
        <button className="delete-btn" onClick={()=>removePlace(id)}>Not Interested</button>
      </footer>
    </article>
  );
};

export default Tour;
