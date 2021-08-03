import React from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';

const NotFoundPage = () => {
  const history = useHistory();

  const handleBackClick = () => {
    history.push('/');
  };

  const handleReloadClick = () => {
    history.go(0);
  };

  return (
    <div className="errorPage">
      <h1>Something went wrong</h1>
      <button className="errorPage__button" type="button" onClick={handleReloadClick}>
        Try Again
      </button>
      <button className="errorPage__button" type="button" onClick={handleBackClick}>
        Back to home
      </button>
    </div>
  );
};

export default NotFoundPage;
