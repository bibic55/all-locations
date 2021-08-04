import React, { useState } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

import { useHistory } from 'react-router-dom';
import Card from '../../../../shared/Card';
import IconLabel from '../../../../shared/IconLabel';

import Users from '../../../../icons/Users';
import TimeZone from '../../../../icons/TimeZone';
import Views from '../../../../icons/Views';
import Edit from '../../../../icons/Edit';

import './index.scss';

const LocationCard = ({ location: { name, userCount, createdAt, id } }) => {
  // It would be better to solve showing of the icon with css and very easy with display:none,
  // however I had big issues with icons because exports are really bad, they have same id's all over the place and I spent a lot of time just showing them and hover state was easier to do with state
  const [isEditIconShown, setIsEditIconShown] = useState(false);
  const [numberOfViews, setNumberOfViews] = useState(0);

  const history = useHistory();

  const handleClick = () => {
    setNumberOfViews(numberOfViews + 1);
    history.push(`/locations/${id}`);
  };

  return (
    <Card
      className="locationCard"
      onClick={handleClick}
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

      <IconLabel
        className="locationCard__content"
        isEllipsis
        icon={<Views />}
        label={numberOfViews}
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
