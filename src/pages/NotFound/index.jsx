import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { PATHS } from '../../router/pathes';
// import notfoundIamge from '../../assets/notfound.jpg';
const NotFound = () => {
  return (
    <div className='container'>
      <img src='assets/notfound.jpg' alt="" srcset="" />
      <p>
        <button>
          <Link to={PATHS.HOME} className='back-link'>
            Go to Home
          </Link>
        </button>
        .
      </p>
    </div>
  );
};

export default NotFound;
