 import React from 'react';

function Container({ cards }) {
  return (
    <div className='cardContainer'>
      {
        cards.map((card, i) => {
          return (
              <article className='card' key={i}>
                <h3 className='cardTitle'>{card.title}</h3>
                <p className='cardBody'>{card.body}</p>
                <button className='deleteButton'>delete</button>
              </article>
            )
        })
      }
    </div>
  )
}

export default Container;