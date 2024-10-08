"use client";
import React, { useEffect, useState } from "react";
import "../app/globals.css";
import Link from "next/link";
import axios from "axios";

function Sells() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api-ecom-46a3.onrender.com/show");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const valueLink = (value) => {
    return value.replace(/\s+/g, "_");
  };

  return (
    <div className="sells-page">
      {data
        .filter((item) => !item.hidden && !item.sold) // Filter out hidden and sold items
        .slice(0, 8) // Show only the first 8 items
        .map((item) => (
          <div key={item.id} id="card-item">
            <div>
              <div id="name-price-card">
                <h4>
                  {item.title}
                  {item.sold == true ? (
                    <span id="sold-title">Sold</span>
                  ) : item.coupon ? (
                    <span id="sold-title-2">-{item.coupon}%</span>
                  ) : (
                    ""
                  )}
                </h4>
                <li>
                  {item.priceWithCounpon ? (
                    <h4 id="old-price">{item.priceWithCounpon} $</h4>
                  ) : (
                    ""
                  )}
                  {item.oldPrice ? (
                    <h4 id="old-price">{item.oldPrice} $</h4>
                  ) : (
                    ""
                  )}
                  <h4 id="new-price">{item.newPrice} $</h4>
                </li>
              </div>
              <div id="icons-card">
                <Link href={`/${item._id}`}>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full"
                  >
                    <rect
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      rx="30"
                      fill="transparent"
                      stroke="transparent"
                      strokeWidth="0"
                      strokeOpacity="100%"
                      paintOrder="stroke"
                    ></rect>
                    <svg
                      width="512px"
                      height="512px"
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      x="0"
                      y="0"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="currentColor">
                        <path d="M396 512a112 112 0 1 0 224 0a112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3c7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176s176 78.8 176 176s-78.8 176-176 176z" />
                      </g>
                    </svg>
                  </svg>
                </Link>
                <Link href="">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full"
                  >
                    <rect
                      width="512"
                      height="512"
                      x="0"
                      y="0"
                      rx="30"
                      fill="transparent"
                      stroke="transparent"
                      strokeWidth="0"
                      strokeOpacity="100%"
                      paintOrder="stroke"
                    ></rect>
                    <svg
                      width="512px"
                      height="512px"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      x="0"
                      y="0"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="currentColor">
                        <path d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7Z" />
                        <circle cx="7.5" cy="19.5" r="1.5" />
                        <circle cx="17.5" cy="19.5" r="1.5" />
                      </g>
                    </svg>
                  </svg>
                </Link>
              </div>
            </div>
            <img src={item.images?.[0]} alt={item.image} />
          </div>
        ))}
    </div>
  );
}

export default Sells;
