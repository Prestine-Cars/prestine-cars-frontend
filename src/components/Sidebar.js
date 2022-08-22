import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as TiSocial from 'react-icons/ti';
import logo from '../images/logo-prestinecars.png';

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const showPage = () => {
    if (sidebar) setSidebar(!sidebar);
  };

  return (
    <div className={`text-slate-600 sm:w-1/5 z-10 relative ${sidebar ? 'h-screen' : 'max-h-min'}`}>
      <button type="button" className="sm:hidden m-3 absolute" onClick={showSidebar}>
        {!sidebar ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500 z-20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>

        ) : (
          <svg
            className="w-6 h-6 text-gray-500 z-20"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        )}
      </button>
      <nav
        className={`${sidebar ? 'flex' : 'hidden sm:flex'} flex-col w-full sm:w-1/5 h-screen bg-white sm:border-r-2 pt-7 sm:pt-0 sm:fixed`}
      >
        <NavLink className="m-4 hidden sm:flex" to="/cities">
          <img src={logo} alt="logo" width={100} />
        </NavLink>
        <ul className="sm:ml-2 pt-2 pb-3 pl-0 mt-6 text-center">
          <li className="flex flex-col">
            {[
              ['CITIES', '/cities'],
              ['RESERVATIONS', '/reservations'],
              ['ADD CITY', '/add_city'],
              ['DELETE CITY', '/delete_city'],
            ].map(([title, url]) => (
              <NavLink
                to={url}
                key={title}
                onClick={showPage}
                className={({ isActive }) => (isActive ? 'bg-primary-300 text-white text-sm sm:text-left font-semibold px-3 py-2 hover:bg-primary-100 w-full hover:text-white font-body' : 'text-sm sm:text-left font-semibold px-3 py-2 hover:bg-primary-300 w-full hover:text-white no-underline text-gray-600 font-body')}
              >
                {title}
              </NavLink>
            ))}
            <NavLink
              to="/"
              onClick="logout" // to be updated
              className="text-sm sm:text-left font-semibold px-3 py-2 hover:bg-primary-300 hover:text-white w-full no-underline text-gray-600 font-body"
            >
              LOGOUT
            </NavLink>
          </li>
        </ul>
        <div className="mt-auto text-center">
          <ul className="flex justify-center pl-0">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-gray-600">
                <TiSocial.TiSocialFacebook />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-gray-600">
                <TiSocial.TiSocialTwitter />
              </a>
            </li>
            <li>
              <a href="https://myaccount.google.com/" target="_blank" rel="noreferrer" className="text-gray-600">
                <TiSocial.TiSocialGooglePlus />
              </a>
            </li>
            <li>
              <a href="https://vimeo.com/" target="_blank" rel="noreferrer" className="text-gray-600">
                <TiSocial.TiSocialVimeo />
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer" className="text-gray-600">
                <TiSocial.TiSocialPinterest />
              </a>
            </li>
          </ul>
          <span className="text-xs">&copy; 2022, PRESTINE CARS</span>
        </div>
      </nav>
    </div>
  );
}
