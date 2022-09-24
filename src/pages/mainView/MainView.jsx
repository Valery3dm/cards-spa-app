import React from "react";
import { useEffect, useState } from "react";

import styles from './MainView.module.css';

import {
  changeItem,
  deleteItem,
  fetchData,
} from "../../api/mainViewPage";
import CustomCardsList from "../../hooks/сustomCardsView/CustomCardsView";
import CustomPagination from "../../hooks/CustomPagination";

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

  const handleDeleteItem = async (id) => {
    await deleteItem(id);
    await fetchData(inputValue, activePages, setTotalPages, setData);
  };

  const handleAddToBasket = async (el) => {
    await changeItem(el);
    await fetchData(inputValue, activePages, setTotalPages, setData);
  };

  return (
    <div className={styles.mainView}>
      <label>Please type to search:</label>
      <input
        id="search-title"
        type="search"
        value={inputValue}
        onChange={(e) => handleInput(e.target.value)}
      />
        <CustomCardsList
          data={data}
          handleDeleteItem={handleDeleteItem}
          handleAddToBasket={handleAddToBasket}
          mainViewPage
        />
      <CustomPagination 
        pagesList={pagesList}
        activePages={activePages}
        setActivePages={setActivePages}
      />
    </div>
  );
};

export default MainView;
