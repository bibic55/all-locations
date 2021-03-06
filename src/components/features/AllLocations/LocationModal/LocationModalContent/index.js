import format from 'date-fns/format';
import React from 'react';
import PropTypes from 'prop-types';
import TimeZone from '../../../../icons/TimeZone';
import Users from '../../../../icons/Users';
import Views from '../../../../icons/Views';
import IconLabel from '../../../../shared/IconLabel';

import './index.scss';
import Button from '../../../../shared/Button';

const LocationModalContent = ({
  location: { userCount, numberOfViews, description },
  handleCloseClick,
}) => (
  <div className="locationModalContent">
    <IconLabel
      className="locationModalContent__text"
      isEllipsis
      icon={<Users />}
      label={`${userCount} users`}
    />

    <IconLabel
      className="locationModalContent__text"
      icon={<TimeZone />}
      label={format(new Date(), 'K:mm aaa (zzzz)')}
    />

    <IconLabel
      className="locationModalContent__text"
      isEllipsis
      icon={<Views />}
      label={numberOfViews}
    />

    <div className="locationModalContent__descriptionLabel">Description</div>
    <div className="locationModalContent__description">{description}</div>

    <div className="locationModalContent__submit">
      <Button onClick={handleCloseClick} label="Done" />
    </div>
  </div>
);

LocationModalContent.propTypes = {
  location: PropTypes.shape({
    createdAt: PropTypes.string,
    description: PropTypes.string,
    userCount: PropTypes.number,
    numberOfViews: PropTypes.number,
    name: PropTypes.string,
  }),
  handleCloseClick: PropTypes.func,
};

export default LocationModalContent;
