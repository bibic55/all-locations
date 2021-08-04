import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ViewsContext = createContext({});

const ViewsProvider = ({ children }) => {
  const [views, setViews] = useState({});

  const handleChangeViews = (id) => {
    setViews({ ...views, [id]: (views[id] || 0) + 1 });
  };

  return (
    <ViewsContext.Provider value={{ views, handleChangeViews }}>{children}</ViewsContext.Provider>
  );
};

ViewsProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ViewsProvider;
