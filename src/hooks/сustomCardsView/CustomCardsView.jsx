import React from "react";
import { Link } from "react-router-dom";
import styles from './CustomCardsView.module.css'

const CustomCardsList = ({
  data,
  handleIncrement,
  handleDecrement,
  handleDeleteItem,
  handleDeleteItemFromWishList,
  handleAddToBasket,
  mainViewPage,
}) => {
  return (
    <>
      {data.length !== 0 ? (
        <ol className={styles.cards_list_view}>
          {data.map((el) => (
            <div key={el?.id} className={styles.card_view}>
              <div>title - {el?.title}</div>
              <div>price - {el?.price}</div>
              <div>description - {el?.description}</div>
              {mainViewPage ? (
                <>
                  <button
                    type="button"
                    onClick={() => handleAddToBasket(el)}
                    disabled={el.inCart}
                  >
                    Add to cart
                  </button>
                  <Link to={`edit-view/${el?.id}`}>
                    <button type="button">Edit</button>
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDeleteItem(el?.id)}
                  >
                    Delete
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => handleDeleteItemFromWishList(el)}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    onClick={() => handleIncrement(el?.id)}
                  >
                    +1
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDecrement(el?.id)}
                  >
                    -1
                  </button>
                  <div>
                    count: {el.count}
                  </div>
                </>
              )}
            </div>
          ))}
        </ol>
      ) : (
        <div>Nothing found</div>
      )}
    </>
  );
};

export default CustomCardsList;
