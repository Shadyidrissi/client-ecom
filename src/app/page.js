"use client";
import Subscribe from "../components/Subscribe";
import Sells from "../components/Sells";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [category, setCategory] = useState([]);

  // Corrected useEffect without async directly
  useEffect(() => {
    const fetchData = async () => {
      try {
        const respons = await axios.get("https://api-ecom-46a3.onrender.com/all_Catrgory");
        setCategory(respons.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="loading-page-div">
        <div>
          <div>
            <h3 id="title-loading-page">
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text{" "}
            </h3>
            <div className="input-container">
              <input
                id="input-loading-page"
                type="text"
                placeholder="Type here..."
              />
              <i className="fas fa-search"></i>
            </div>
          </div>
          <div>
            <img
              id="image-loading-page"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/b01cce69851661.5b8faf509438f.jpg"
              alt="helloo"
            />
          </div>
          <div></div>
          <div id="icons-loading-page">
            <Link href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
              >
                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
              </svg>
            </Link>
            <Link href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
              >
                <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
              </svg>
            </Link>
            <Link href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
              >
                <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Category list rendering */}
      <div className="list-category">
        <ul id="item-category">
        {category.slice(0, 10).map((item, index) => (
              <Link key={index} href='/category'>{item.title}</Link>
          ))}
        </ul>
        <ul id="button-category">
          <Link href="/category">See All</Link>
        </ul>
        
      </div>


      {/* Other components */}
      <Sells />
      <Subscribe />
    </>
  );
}
