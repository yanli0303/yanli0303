import './BasicInfo.css';

import React from 'react';

export const BasicInfo = () => (
  <div className="tile is-ancestor">
    <div className="tile is-parent is-2">
      <div className="tile is-child has-text-centered">
        <img className="photo" src="logo192.png" alt="Yan Li" />
      </div>
    </div>
    <div className="tile is-parent is-vertical">
      <div className="tile is-parent">
        <div className="tile is-child has-text-centered">
          <h3 className="title is-3">Yan Li</h3>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child has-text-centered">
          <p className="heading">
            <svg
              className="icon is-small"
              role="img"
              viewBox="0 0 384 384"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594
      c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448
      c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813
      C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z"
                />
              </g>
            </svg>
            TEL
          </p>
          <p>(703)-901-8855</p>
        </div>
        <div className="tile is-child has-text-centered">
          <p className="heading">
            <svg
              className="icon is-small"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z" />
            </svg>
            EMAIL
          </p>
          <p>
            <a href="mailto:yanli0303@outlook.com">yanli0303@outlook.com</a>
          </p>
        </div>
        <div className="tile is-child has-text-centered">
          <p className="heading">
            <svg
              className="icon is-small"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GITHUB
          </p>
          <p>
            <a href="https://github.com/yanli0303/">github.com/yanli0303</a>
          </p>
        </div>
        <div className="tile is-child has-text-centered">
          <p className="heading">
            <svg
              className="icon is-small"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LINKEDIN
          </p>
          <p>
            <a href="https://www.linkedin.com/in/yanli0303/">
              linkedin.com/in/yanli0303
            </a>
          </p>
        </div>
      </div>
      <div className="tile is-parent">
        <div className="tile is-child">
          I&apos;m a full-stack web developer who leans toward the front-end and
          looking for a senior software engineer role in Northern Virginia, San
          Francisco Bay Area, and Greater Seattle Area.
        </div>
      </div>
    </div>
  </div>
);
