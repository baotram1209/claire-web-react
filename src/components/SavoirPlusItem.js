import React from 'react';

const SavoirPlusItem = ({ item }) => {
  // const imageLink = require({item.image_link});
  return (
    <>
      <p>{item.link}</p>
      {/* <a href={item.link} className="card-lien"> */}
      <img src={item.image_link} alt="image" />
      <h2>{item.title}</h2>
      <p>{item.content}</p>
      {/* </a> */}
    </>
  );
};

export default SavoirPlusItem;
