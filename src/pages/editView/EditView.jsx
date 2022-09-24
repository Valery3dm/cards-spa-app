import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { changeItem, getCard } from '../../api/mainViewPage';
import { useNavigate } from "react-router-dom";

import CustomFrom from '../../hooks/customFrom/CustomFrom'


const EditView = () => {
    const { productId } = useParams()
    const navigate = useNavigate();

    const [id, setId] = useState();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    const [inCart, setInCart] = useState(false);



    useEffect(() => {
        getCard(productId, setTitle, setPrice, setInCart, setDescription, setId);
    }, [productId]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      const item = {id, title, description, price, inCart}
      await changeItem(item);
      navigate('/');
    };

  return (
    <>
      <CustomFrom
        card={{title, price, description}}
        handleSubmit={handleSubmit}
        setTitle={setTitle}
        setPrice={setPrice}
        setDescription={setDescription}
      />
    </>
  )
}

export default EditView;
