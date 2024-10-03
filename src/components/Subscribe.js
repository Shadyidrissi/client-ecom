import React from "react";
import "../app/globals.css";

function Subscribe() {
  return (
    <>
      <div class="subscribe">
        <h2 class="subscribe__title">Let's keep in touch</h2>
        <p class="subscribe__copy">
          Subscribe to keep up with fresh news and exciting updates. We promise
          not to spam you!
        </p>
        <div class="form">
          <input
            type="email"
            class="form__email"
            placeholder="Enter your email address"
          />
          <button class="form__button">Send</button>
        </div>
        <div class="notice">
          <input type="checkbox" /> <span class="notice__copy"> I agree to my email address being stored and uses to recieve monthly
            newsletter.
          </span>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
