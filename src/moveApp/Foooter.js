import React from 'react'

function Foooter() {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                A Live TV free for all has begun. Enjoy instant access to 250+
                channels for the whole family anywhere, on any device.
              </p>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright © 2017 All Rights Reserved by
                <a href="#">Scanfcode</a>.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                    >
                      <path
                        fill="#3f8e90"
                        fillRule="evenodd"
                        d="M.1 14.3C.1 6.8 6.3.8 14 .8s13.9 6 13.9 13.5c0 7.4-6.2 13.4-13.9 13.4-7.6 0-13.8-6-13.8-13.4zM15 21.7v-7.3h2l.3-2.5h-2.4v-1.3c0-.6.1-1 1-1h1.4V7.1h-2.1c-2.5 0-3.4 1.2-3.4 3.3v1.5h-1.5v2.5h1.5v7.3H15z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                    >
                      <path
                        fill="#3f8e90"
                        fillRule="evenodd"
                        d="M0 14.3C0 6.8 6.2.8 13.8.8c7.7 0 13.9 6 13.9 13.5 0 7.4-6.2 13.4-13.9 13.4-7.6 0-13.8-6-13.8-13.4zm13.4-2.6v.5H13a8 8 0 01-4.6-2.3l-.7-.6-.1.5c-.4 1-.2 2 .6 2.8.3.4.3.4-.4.2h-.5l.4 1.2c.2.5.8 1 1.3 1.2l.5.2h-.6c-.5 0-.5 0-.5.2.2.6 1 1.3 1.8 1.6l.6.2-.5.3a5.6 5.6 0 01-2.6.7 3 3 0 00-.8 0c0 .2 1.2.7 1.9.9 2 .6 4.5.4 6.3-.7a8.3 8.3 0 003.3-3.7c.3-.8.6-2.2.6-2.8 0-.5 0-.5.6-1l.7-.8c0-.2 0-.2-.4 0-.9.3-1 .3-.6-.2.3-.3.7-.8.7-1l-.3.1a5.5 5.5 0 01-.9.3l-.5.2-.5-.3A4 4 0 0017 9c-.5-.2-1.2-.1-1.7 0-1.2.4-2 1.5-1.9 2.7z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                    >
                      <path
                        fill="#3f8e90"
                        d="M14 0C6.3 0 0 6.3 0 14s6.3 14 14 14 14-6.3 14-14S21.7 0 14 0zm-2.3 16.6v-5.2l4.5 2.6-4.5 2.6z"
                      />
                      <path
                        fill="#26292D"
                        d="M21.8 10.1c-.2-.7-.7-1.2-1.4-1.4-1.3-.4-6.4-.4-6.4-.4s-5.1 0-6.4.3c-.6.2-1.2.8-1.4 1.5-.3 1.3-.3 3.9-.3 3.9s0 2.7.3 3.9c.2.7.7 1.2 1.4 1.4 1.3.3 6.4.3 6.4.3s5.1 0 6.4-.3c.7-.2 1.2-.7 1.4-1.4.3-1.3.3-3.9.3-3.9s0-2.6-.3-3.9z"
                      />
                      <path
                        fill="#FF642E"
                        d="M11.7 16.6l4.5-2.6-4.5-2.6v5.2z"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={29}
                    >
                      <g fill="#3f8e90" fillRule="evenodd">
                        <path d="M0 14.5a13.6 13.6 0 1127.3 0 13.6 13.6 0 01-27.3 0zm13.7-7.3a51.6 51.6 0 00-4.8.4 3.6 3.6 0 00-1.3.8c-.4.4-.7.8-.8 1.3-.2.5-.4 1-.4 1.8a53.4 53.4 0 00.4 7.7c.1.5.4 1 .8 1.3.4.4.8.7 1.3.9.4.1 1 .3 1.7.3a52 52 0 007.8-.3 3.6 3.6 0 001.3-.9c.4-.4.7-.8.8-1.3.2-.4.3-1 .4-1.7a53 53 0 00-.4-7.8 3.6 3.6 0 00-.8-1.3 3.6 3.6 0 00-1.3-.8 6 6 0 00-1.8-.4h-3z" />
                        <path d="M13 8.5h.6a52.1 52.1 0 014.3.3c.4.1.6.3.9.5.2.3.4.5.5.9l.3 1.3a49.3 49.3 0 01-.3 7.3 2.3 2.3 0 01-.5.8 2.3 2.3 0 01-.9.5 50.3 50.3 0 01-8.6 0 2.3 2.3 0 01-.8-.5 2.3 2.3 0 01-.5-.8 50.7 50.7 0 010-8.6c.1-.4.3-.6.5-.9a2.3 2.3 0 01.9-.5 40.2 40.2 0 013.6-.3zm4.5 1.2a.9.9 0 100 1.8.9.9 0 000-1.8zm-3.8 1a3.7 3.7 0 100 7.5 3.7 3.7 0 000-7.5z" />
                        <path d="M16 14.5a2.4 2.4 0 11-4.8 0 2.4 2.4 0 014.9 0z" />
                      </g>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Foooter
