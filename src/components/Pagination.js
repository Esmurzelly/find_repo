import React from 'react'

const Pagination = ({cardsPerPage, totalCards, paginate}) => {
  const pageNumbers = [];

  for(let i=1; i <= Math.ceil((totalCards / cardsPerPage)); i++) {
    pageNumbers.push(i);
  }

    return (
    <div>
        <ul className='pagination'>
            {pageNumbers.map((number) => (
                <li className='page-item' key={number}>
                    <a className='page-link' onClick={() => paginate(number)}>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Pagination