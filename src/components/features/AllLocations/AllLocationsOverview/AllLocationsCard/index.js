import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../../shared/Card';

import './index.scss';

const AllLocationsCard = ({ location: { name, userCount, createdAt } }) => (
  <Card className="allLocationsCard" onClick={() => {}}>
    <div>{name}</div>
    <div>{userCount}</div>
    <div>{createdAt}</div>
    {/* TODO implement views logic */}
    <div>{Math.floor(Math.random() * 10)}</div>
  </Card>
);

AllLocationsCard.propTypes = {
  location: PropTypes.shape({
    createdAt: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    userCount: PropTypes.number,
  }),
};

export default AllLocationsCard;
