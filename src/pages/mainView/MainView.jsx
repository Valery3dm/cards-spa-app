import React from "react";
import { useEffect, useState } from "react";

import { changeItem, deleteItem, fetchData } from "../../api/mainViewPage";

import styles from "./MainView.module.css";

const MainView = () => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [activePages, setActivePages] = useState(1);
  const pagesList = [];

  useEffect(() => {
    fetchData(inputValue, activePages, setTotalPages, setData);
  }, [inputValue, activePages]);

  if (totalPages >= 1) {
    for (let i = 1; i <= totalPages; i++) {
      pagesList.push(i);
    }
  }

  const handleInput = (value) => {
    setInputValue(value);
    if (activePages !== 1) {
      setActivePages(1);
    }
  };

  const setPageButtonStyle = num => {
    if (num === activePages) {
      return {
        fontWeight: 700
      }
    }
  }

  const handleDeleteItem = async id => {
    console.log('DELETED', id)
    await deleteItem(id)
    await fetchData(inputValue, activePages, setTotalPages, setData);
  }

  const handleAddToBasket = async el => {
    console.log('PUT', el)
    await changeItem(el)
    await fetchData(inputValue, activePages, setTotalPages, setData);
  }

  return (
    <div>
      MainView page
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:3000";
        }}
      >
        Create
      </button>
      <input
        type="search"
        value={inputValue}
        onChange={(e) => handleInput(e.target.value)}
      />
      {data.length !== 0 ? (
        <ol className={styles.cards_list_view}>
          {data.map((el) => (
            <li key={el?.id} className={styles.card_view}>
              <div>title - {el?.title}</div>
              <div>price - {el?.price}</div>
              <div>description - {el?.description}</div>
              <button
                type="button"
                onClick={() => console.log('Edit')}
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => handleDeleteItem(el?.id)}
              >
                Delete
              </button>
              <button
                type="button"
                onClick={() => handleAddToBasket(el)}
                disabled={el.inCart}
              >
                Add to cart
              </button>
            </li>
          ))}
        </ol>
      ) : (
        <div>Nothing found</div>
      )}
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
    </div>
  );
};

export default MainView;
