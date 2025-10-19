import React from 'react';
import './NewsSection.css';

const NewsSection = () => {


  return (
    <section className="news-input">
      <div className="container">
        <div className="news-content">
          <h2>Contact your local supplier...</h2>
          {/* Newsletter signup form commented out as in original */}
          {/* <div className="input-group email-input">
            <input
              id="email"
              name="email"
              type="text"
              className="form-control"
              placeholder="Chat Disabled..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Enter Email"
            />
            <button
              className="btn btn-outline-warning"
              type="button"
              onClick={handleSubmit}
            >
              Enter
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;