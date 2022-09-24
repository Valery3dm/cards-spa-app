import React from 'react'

const CustomPagination = ({
  pagesList,
  activePages,
  setActivePages
}) => {

  const setPageButtonStyle = (num) => {
    if (num === activePages) {
      return {
        fontWeight: 700,
      };
    }
  };
  
  return (
    <div>
        {pagesList.map((num, idx) => (
          <span
            key={idx}
            style={{ marginRight: "5px", ...setPageButtonStyle(num) }}
            onClick={() => setActivePages(num)}
          >
            {num}
          </span>
        ))}
      </div>
  )
}

export default CustomPagination;
