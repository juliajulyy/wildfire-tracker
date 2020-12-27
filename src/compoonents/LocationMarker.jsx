import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import LocationIcon from '@iconify/icons-mdi/fire-alert';

const LocationMarker = ({ onClick }) => (
  <div
    className="location-marker"
    onClick={onClick}
  >
    <Icon icon={LocationIcon} className="location-icon" />
  </div>
);

LocationMarker.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LocationMarker;
