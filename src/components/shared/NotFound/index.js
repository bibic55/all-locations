import React from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';

const NotFound = () => {
  const history = useHistory();

  const handleBackClick = () => {
    history.push('/');
  };

  return (
    <div className="notFound">
      <h1>404 Page Not Found</h1>
      <button className="notFound__button" type="button" onClick={handleBackClick}>
        Back to safety
      </button>
    </div>
  );
};

export default NotFound;
