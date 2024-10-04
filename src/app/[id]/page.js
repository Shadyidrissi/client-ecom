"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Page({ params }) {
  const [data, setData] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api-ecom-46a3.onrender.com/show/${id}`);
        setData(response.data);
        setMainImage(response.data.images[0] || "https://via.placeholder.com/300"); // Default image placeholder if empty
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const handleImageClick = (src) => {
    setMainImage(src);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    return date.toLocaleDateString("en-GB", options).replace(",", ""); // Using "en-GB" for dd/mm/yyyy
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div className="product-details">
      {/* Display the main image */}
      <div id="image-show-div">
        <img id="show-image" src={mainImage} alt="Main" />
        <div id="images-div">
          {/* Display thumbnails for the other images */}
          {data.images.map((src, index) =>
            src ? (
              <img
                key={index}
                src={src}
                alt={`Thumbnail ${index}`}
                style={{
                  cursor: "pointer",
                  margin: "5px",
                  width: "70px",
                  height: "auto",
                }}
                onClick={() => handleImageClick(src)}
              />
            ) : null
          )}
        </div>
      </div>

      {/* Display product details */}
      <div id="details-show-div">
        <div>
          {/* Display the title */}
          <h1>
            {data.title}  <span style={{ fontSize: "18px" }}>{formatDate(data.date)}</span>
          </h1>

          {/* Display placeholder colors */}
          <div id="color-product">
            {data.colors.map((color) =>
              color === "" ? (
                ""
              ) : (
                <div style={{ backgroundColor: `${color}` }}></div>
              )
            )}
          </div>

          {/* Display a description (Placeholder) */}
          <p id="description-product" style={{ wordBreak: "break-word" }}>
            {data.paragraph}
          </p>

          {/* Display prices */}
          <div id="price-product">
            <h2>Price: {data.priceWithCounpon ?(data.priceWithCounpon):(data.newPrice)}$</h2>
            <h2>Livraison: 1.5$</h2>
          </div>

          {/* Display available pieces */}
          <p id="avalible-product"> Content available: {data.numberPices}</p>

          {/* Action button */}
          {data.sold ? (
            <h1 id="item-is-sold">
              <span>Item Is Sold</span>{" "}
            </h1>
          ) : (
            <button id="button-send">Send Now</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
