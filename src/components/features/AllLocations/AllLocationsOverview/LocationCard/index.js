import React, { useState } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

import Card from '../../../../shared/Card';
import IconLabel from '../../../../shared/IconLabel';

import Users from '../../../../icons/Users';
import TimeZone from '../../../../icons/TimeZone';
import Views from '../../../../icons/Views';
import Edit from '../../../../icons/Edit';

import './index.scss';

const LocationCard = ({ location: { name, userCount, createdAt } }) => {
  const [isEditIconShown, setIsEditIconShown] = useState(false);

  return (
    <Card
      className="locationCard"
      onClick={() => {}}
      onMouseEnter={() => setIsEditIconShown(true)}
      onFocus={() => setIsEditIconShown(true)}
      onMouseLeave={() => setIsEditIconShown(false)}
      onBlur={() => setIsEditIconShown(false)}
    >
      <div className="locationCard__name">{name}</div>
      <IconLabel
        className="locationCard__content"
        isEllipsis
        icon={<Users />}
        label={`${userCount} users`}
      />

      <IconLabel
        className="locationCard__content"
        icon={<TimeZone />}
        label={format(new Date(createdAt), 'K:mm aaa (zzzz)')}
      />

      {/* TODO implement views logic */}
      <IconLabel
        className="locationCard__content"
        isEllipsis
        icon={<Views />}
        label={Math.floor(Math.random() * 10)}
      />

      {isEditIconShown && (
        <div className="locationCard__hoverIcon">
          <Edit />
        </div>
      )}
    </Card>
  );
};

LocationCard.propTypes = {
  location: PropTypes.shape({
    createdAt: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    userCount: PropTypes.number,
  }),
};

export default LocationCard;
