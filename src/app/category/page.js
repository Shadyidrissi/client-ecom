import React from "react";
import Link from "next/link";
import "../globals.css";

function page() {
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
      <div id="card-item">
        <div>
          <div id="name-price-card">
            <h4>name</h4>
            <li>
              <h4>$old</h4> <h4>$new</h4>
            </li>
          </div>
          {/* <div>sold if</div> */}
          <div id="icons-card">
            <Link href="">
              <svg
                width="30"
                height="30"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                class="h-full w-full"
              >
                <rect
                  width="512"
                  height="512"
                  x="0"
                  y="0"
                  rx="30"
                  fill="transparent"
                  stroke="transparent"
                  stroke-width="0"
                  stroke-opacity="100%"
                  paint-order="stroke"
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
                      fill="currentColor"
                      d="M396 512a112 112 0 1 0 224 0a112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3c7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176s176 78.8 176 176s-78.8 176-176 176z"
                    />
                  </g>
                </svg>
              </svg>{" "}
              </Link>
              <Link href="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-full w-full"
                >
                  <rect
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    rx="30"
                    fill="transparent"
                    stroke="transparent"
                    stroke-width="0"
                    stroke-opacity="100%"
                    paint-order="stroke"
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
                      <g id="evaShoppingCartFill0">
                        <g id="evaShoppingCartFill1">
                          <g id="evaShoppingCartFill2" fill="currentColor">
                            <path d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7Z" />
                            <circle cx="7.5" cy="19.5" r="1.5" />
                            <circle cx="17.5" cy="19.5" r="1.5" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </svg>{" "}
            </Link>
          </div>
        </div>
        <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg" alt="" />
      </div>
      <div id="card-item">
        <div>
          <div id="name-price-card">
            <h4>name</h4>
            <li>
              <h4>$old</h4> <h4>$new</h4>
            </li>
          </div>
          {/* <div>sold if</div> */}
          <div id="icons-card">
            <Link href="">
              <svg
                width="30"
                height="30"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                class="h-full w-full"
              >
                <rect
                  width="512"
                  height="512"
                  x="0"
                  y="0"
                  rx="30"
                  fill="transparent"
                  stroke="transparent"
                  stroke-width="0"
                  stroke-opacity="100%"
                  paint-order="stroke"
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
                      fill="currentColor"
                      d="M396 512a112 112 0 1 0 224 0a112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3c7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176s176 78.8 176 176s-78.8 176-176 176z"
                    />
                  </g>
                </svg>
              </svg>{" "}
              </Link>
              <Link href="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-full w-full"
                >
                  <rect
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    rx="30"
                    fill="transparent"
                    stroke="transparent"
                    stroke-width="0"
                    stroke-opacity="100%"
                    paint-order="stroke"
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
                      <g id="evaShoppingCartFill0">
                        <g id="evaShoppingCartFill1">
                          <g id="evaShoppingCartFill2" fill="currentColor">
                            <path d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7Z" />
                            <circle cx="7.5" cy="19.5" r="1.5" />
                            <circle cx="17.5" cy="19.5" r="1.5" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </svg>{" "}
            </Link>
          </div>
        </div>
        <img src="https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/overtime-group-plp.png" alt="" />
      </div>
      <div id="card-item">
        <div>
          <div id="name-price-card">
            <h4>name</h4>
            <li>
              <h4>$old</h4> <h4>$new</h4>
            </li>
          </div>
          {/* <div>sold if</div> */}
          <div id="icons-card">
            <Link href="">
              <svg
                width="30"
                height="30"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                class="h-full w-full"
              >
                <rect
                  width="512"
                  height="512"
                  x="0"
                  y="0"
                  rx="30"
                  fill="transparent"
                  stroke="transparent"
                  stroke-width="0"
                  stroke-opacity="100%"
                  paint-order="stroke"
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
                      fill="currentColor"
                      d="M396 512a112 112 0 1 0 224 0a112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3c7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176s176 78.8 176 176s-78.8 176-176 176z"
                    />
                  </g>
                </svg>
              </svg>{" "}
              </Link>
              <Link href="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-full w-full"
                >
                  <rect
                    width="512"
                    height="512"
                    x="0"
                    y="0"
                    rx="30"
                    fill="transparent"
                    stroke="transparent"
                    stroke-width="0"
                    stroke-opacity="100%"
                    paint-order="stroke"
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
                      <g id="evaShoppingCartFill0">
                        <g id="evaShoppingCartFill1">
                          <g id="evaShoppingCartFill2" fill="currentColor">
                            <path d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7Z" />
                            <circle cx="7.5" cy="19.5" r="1.5" />
                            <circle cx="17.5" cy="19.5" r="1.5" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </svg>{" "}
            </Link>
          </div>
        </div>
        <img src="https://off.com.ph/-/media/images/off/ph/products-en/update-983/plp/overtime-group-plp.png" alt="" />
      </div>
      </div>
    </div>
  );
}

export default page;
