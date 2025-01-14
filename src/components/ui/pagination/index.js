import React from 'react';

const Pagination = ({ currentActive, handleClick, data, isSelected }) => {
  return (
    <>
      <div className='pagination__list'>
        <ul>
          {data?.map((item, index) => (
            <li
              className={`${currentActive == item ? 'active' : ''} ${
                isSelected[item] ? 'picked' : ''
              }`}
              key={index}
              onClick={() => {
                if ((isSelected[item] || currentActive == item) && isSelected[currentActive]) {
                  handleClick(item);
                }
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Pagination;
