import React from 'react';

import styles from './CustomFrom.module.css';

const CustomFrom = ({
    card,
    handleSubmit,
    setTitle,
    setPrice,
    setDescription
}) => {
  return (
    <form
        action=""
        method="post"
        onSubmit={handleSubmit}
        className={styles.formStyle}
      >
        <label>Title:</label>
        <input
          id="POST-title"
          type="text"
          name="title"
          value={card?.title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Price:</label>
        <input
          id="POST-price"
          type="number"
          name="price"
          value={card?.price}
          required
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Description:</label>
        <input
          id="POST-description"
          type="textarea"
          name="description"
          value={card?.description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="submit" value="Save" />
      </form>
  )
}

export default CustomFrom;
