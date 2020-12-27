import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import LocationIcon from '@iconify/icons-mdi/fire-alert';

const LocationMarker = ({ lat, lng, onClick }) => (
  <div
    className="location-marker"
    onClick={onClick}
  >
    <Icon icon={LocationIcon} className="location-icon" />
  </div>
);

LocationMarker.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default LocationMarker;
