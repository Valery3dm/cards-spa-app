import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addItem } from "../../api/mainViewPage";
import CustomFrom from "../../hooks/customFrom/CustomFrom";

const CreateView = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = `${Math.random()}${title}`;
    await addItem({ id, title, price, description });
    navigate("/");
  };

  return (
    <CustomFrom
      handleSubmit={handleSubmit}
      setTitle={setTitle}
      setPrice={setPrice}
      setDescription={setDescription}
    />
  );
};

export default CreateView;
