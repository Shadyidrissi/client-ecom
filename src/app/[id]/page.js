"use client";
import React from "react";
import { useState } from "react";

function page() {
  const [mainImage, setMainImage] = useState(
    "https://musicshopnepal.com/wp-content/uploads/2021/05/%E7%BB%BF%E8%89%B2-1.jpeg"
  );
  const images = [
    "https://www.vendable.ma/wp-content/uploads/2021/02/1_d292278e-c53c-406f-ad29-a61c28d25110_grande.jpg",
    "https://musicshopnepal.com/wp-content/uploads/2021/05/%E7%99%BD%E8%89%B2-1.jpeg",
    "https://musicshopnepal.com/wp-content/uploads/2021/05/%E7%BB%BF%E8%89%B2-1.jpeg",
  ];
  const handleImageClick = (src) => {
    setMainImage(src);
  };

  return (
    <div className="product-details">
      <div id="image-show-div">
        <img id="show-image" src={mainImage} alt="Main" />
        <div id="images-div">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Thumbnail ${index}`}
              style={{
                cursor: "pointer",
                margin: "5px",
                width: "100px",
                height: "auto",
              }}
              onClick={() => handleImageClick(src)}
            />
          ))}
        </div>
      </div>
      <div id="details-show-div">
        <div>
          <h1>title</h1>
          <div id="color-product">
            <div style={{ backgroundColor: "white" }}></div>
            <div style={{ backgroundColor: "red" }}></div>
            <div style={{ backgroundColor: "green" }}></div>
          </div>
          <p id="description-product">
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing s
          </p>
          <div id="price-product">
            <h2>Price : 12$</h2>
            <h2>Livrision : 22$</h2>
          </div>
          <p id="avalible-product">content avalibale : 12</p>
          <button id="button-send">send now</button>
        </div>
      </div>
    </div>
  );
}

export default page;
