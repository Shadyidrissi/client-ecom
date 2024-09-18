"use client";
import React, { useState } from "react";
import "../globals.css";
import Link from "next/link";

function page() {
  const [items, setItems] = useState([
    { name: "keyborad", oldP: "20$", newP: "11$", id: "1", image: "https://m.media-amazon.com/images/I/61UGJ7z-sUL._AC_UF894,1000_QL80_.jpg" },
    { name: "maouse", oldP: "10$", newP: "5$", id: "1", image: "https://m.media-amazon.com/images/I/61RYwHoeHjL.jpg" },
    { name: "pad maouse", oldP: "90$", newP: "40$", id: "1", image: "https://www.thermaltake.com/media/catalog/product/cache/cc8b24283b13da6bc2ff91682c03b54b/l/2/l20mousepad01.jpg" },
    { name: "pc gamer", oldP: "1000$", newP: "700$", id: "1", image: "https://www.scoopgaming.com.tn/13599-large_default/pc-portable-gamer-asus-tuf-505dt-amd-ryzen-r5-3550h-gtx1650-ecran-156-full-hd-24g.jpg" },
    { name: "laptop gaming", oldP: "3000$", newP: "2000$", id: "1", image: "https://pcgamercasa.ma/10790-square_large_default/msi-raider-ge78hx-13vi-208dc-i9-13980hx64gb2tb2560x1600240hzrtx-4090-16gb-Pc-Gamer-Casa-Maroc.jpg" },
    { name: "pc gaming", oldP: "1500$", newP: "1000$", id: "1", image: "https://m.media-amazon.com/images/I/71LMiD9i+ML._AC_SL1500_.jpg" },
    { name: "casque", oldP: "50$", newP: "30$", id: "1", image: "https://mediazone.ma/uploads/images/products/14671/14671-83ulc51F.webp" },
    { name: "controller", oldP: "", newP: "25$", id: "1", image: "https://target.scene7.com/is/image/Target/GUEST_700a8c05-7925-4054-aabb-d8540636705c?wid=488&hei=488&fmt=pjpeg" },
    { name: "pc gaming", oldP: "1500$", newP: "1000$", id: "1", image: "https://m.media-amazon.com/images/I/71LMiD9i+ML._AC_SL1500_.jpg" },
    { name: "casque", oldP: "50$", newP: "30$", id: "1", image: "https://mediazone.ma/uploads/images/products/14671/14671-83ulc51F.webp" },
    { name: "controller", oldP: "", newP: "25$", id: "1", image: "https://target.scene7.com/is/image/Target/GUEST_700a8c05-7925-4054-aabb-d8540636705c?wid=488&hei=488&fmt=pjpeg" },
    { name: "pc gaming", oldP: "1500$", newP: "1000$", id: "1", image: "https://m.media-amazon.com/images/I/71LMiD9i+ML._AC_SL1500_.jpg" },
    { name: "casque", oldP: "50$", newP: "30$", id: "1", image: "https://mediazone.ma/uploads/images/products/14671/14671-83ulc51F.webp" },
    { name: "controller", oldP: "", newP: "25$", id: "1", image: "https://target.scene7.com/is/image/Target/GUEST_700a8c05-7925-4054-aabb-d8540636705c?wid=488&hei=488&fmt=pjpeg" },
  ]);

  const valueLink=(value)=>{
    return value.replace(/\s+/g, '_');
  }
  return (
    <div className="category-page-div">
      <header>
        <div id="search-by-category">
          <select id="slection-category">
            <option value="" key="">
              one
            </option>
            <option value="" key="">
              tow
            </option>
            <option value="" key="">
              three
            </option>
          </select>
        </div>
        <div id="search-by-name">
          <div class="input-container">
            <input
              id="input-category-page"
              type="text"
              placeholder="Type here..."
            />
            <i class="fas fa-search"></i>
          </div>
        </div>
      </header>
      <div className="cards-products-category">
      {items.map((item) => (
        <div style={{margin:"20px"}} key={item.id} id="card-item">
          <div>
            <div id="name-price-card">
              <h4>{item.name}</h4>
              <li>
                {item.oldP?(<h4 id="old-price">{item.oldP}</h4>):('')} <h4 id="new-price">{item.newP}</h4>
              </li>
            </div>
            <div id="icons-card">
              <Link href={`/${valueLink(item.name)}`}>
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
                      <path
                        d="M396 512a112 112 0 1 0 224 0a112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3c7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176s176 78.8 176 176s-78.8 176-176 176z"
                      />
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
          <img src={item.image} alt={item.name} />
        </div>
      ))}
      </div>
    </div>
  );
}

export default page;
