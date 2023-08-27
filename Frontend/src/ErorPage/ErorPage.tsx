import React from 'react';
import NavBar from '../nav/NavBar';
import { BiGhost } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function ErorPage() {
  return (
    <>
      <div className="nav">
        <NavBar />
      </div>
      <div className="err-page">
        {/* <h1>ErorPage 404!</h1> */}
        <main>
          <h1>
            4
            <span>
              <i className="fa-solid fa-ghost">
                <BiGhost />
              </i>
            </span>
            4
          </h1>
          <h2>Error: 404 page not found</h2>
          <p>Sorry, the page you're looking for cannot be accessed</p>
          <Link to={'/'}>
            {' '}
            <h4>חזרה לדף הבית</h4>{' '}
          </Link>
        </main>{' '}
      </div>
    </>
  );
}

export default ErorPage;
