import React, { useEffect, useState } from "react";

import { changeItem, getCardViewData } from "../../api/mainViewPage";
import CustomCardsList from "../../hooks/сustomCardsView/CustomCardsView";
import CustomPagination from "../../hooks/CustomPagination";

import styles from './CardView.module.css'

const CardView = () => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [activePages, setActivePages] = useState(1);
  const pagesList = [];

  useEffect(() => {
    getCardViewData(activePages, setTotalPages, setData);
  }, [activePages]);

  if (totalPages >= 1) {
    for (let i = 1; i <= totalPages; i++) {
      pagesList.push(i);
    }
  }

  const handleDeleteItemFromWishList = async (el) => {
    await changeItem(el);
    await getCardViewData(activePages, setTotalPages, setData);
  };

  const handleIncrement = (id) => {
    setData(
      data.map((el) =>
        el.id === id
          ? {
              ...el,
              count: el.count + 1,
              totalItemPrice: el.price * (el.count + 1),
            }
          : el
      )
    );
  };

  const handleDecrement = (id) => {
    setData(
      data.map((el) =>
        el.id === id && el.count > 1
          ? {
              ...el,
              count: el.count - 1,
              totalItemPrice: el.price * (el.count - 1),
            }
          : el
      )
    );
  };

  const Counter = () => {
    if (data.length > 1) {
      return data.reduce((acc, curr) => acc + curr.totalItemPrice, 0);
    }
    if (data.length === 1) {
      return data[0].totalItemPrice;
    }
    return 0;
  };

  return (
    <div className={styles.mainCardView}>
      <CustomCardsList
        data={data}
        handleDeleteItemFromWishList={handleDeleteItemFromWishList}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <CustomPagination
        pagesList={pagesList}
        activePages={activePages}
        setActivePages={setActivePages}
      />
      <div>Total sum:</div>
      <div>{Counter()}</div>
    </div>
  );
};

export default CardView;
