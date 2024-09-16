import React from "react";
import "../globals.css";

function page() {
  return (
    <div className="contact-page-div">
      <div id="info-contact-div">
        <div id="item">
          <li id="logo-icon">
            <svg
              width="80"
              height="80"
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
                fill="#000000"
                x="0"
                y="0"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="black">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2 13.565C2 11.512 4 11 6 11v9a4 4 0 0 1-4-4v-2.435Zm20 0C22 11.512 20 11 18 11v9a4 4 0 0 0 4-4v-2.435ZM6 20V10a6 6 0 1 1 12 0v10"
                  />
                </g>
              </svg>
            </svg>
          </li>
          <li id="title-icon">Phone Number</li>
          <li id="data-icon">+212 643082137</li>
        </div>
        <div id="item">
          <li id="logo-icon">
          <svg width="512" height="512" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="512px" height="512px" viewBox="0 0 36 36" fill="#000000" x="0" y="0" role="img"  xmlns="http://www.w3.org/2000/svg"><g fill="black"><path fill="currentColor" d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm-1.54 22H5.66l7-7.24l-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0L32 9.21v17.5l-7.36-7.36l-1.41 1.41ZM5.31 8h25.07L17.84 20.47Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/></g></svg></svg>
          </li>
          <li id="title-icon">Email</li>
          <li id="data-icon">Chadiidac@gmail.com</li>
        </div>
        <div id="item">
          <li id="logo-icon">
          <svg width="512" height="512" viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="0" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="512px" height="512px" viewBox="0 0 24 24" fill="#050505" x="0" y="0" role="img"  xmlns="http://www.w3.org/2000/svg"><g fill="#050505"><path fill="currentColor" d="M16.36 14c.08-.66.14-1.32.14-2c0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2m-5.15 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56M14.34 14H9.66c-.1-.66-.16-1.32-.16-2c0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2c0 .68-.07 1.34-.16 2M12 19.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96M8 8H5.08A7.923 7.923 0 0 1 9.4 4.44C8.8 5.55 8.35 6.75 8 8m-2.92 8H8c.35 1.25.8 2.45 1.4 3.56A8.008 8.008 0 0 1 5.08 16m-.82-2C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2c0 .68.06 1.34.14 2M12 4.03c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97M18.92 8h-2.95a15.65 15.65 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></g></svg></svg>
          </li>
          <li id="title-icon">Portfolio</li>
          <li id="data-icon">Shady Portfolio <a href="https://shady-portfolio.web.app/">see</a></li>
        </div>
      </div>
      <div id="form-contact-div">
        <h1>Contact Us</h1>
        <p>
          ypesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown
        </p>
        <form>
          <div>
            <input type="text" placeholder="full name" />
            <input type="text" placeholder="full name" />
          </div>
          <div>
            <input type="text" placeholder="full name" />
            <input type="text" placeholder="full name" />
          </div>
          <button>Send </button>
        </form>
      </div>
    </div>
  );
}

export default page;
