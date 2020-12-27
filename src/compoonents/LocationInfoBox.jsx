import PropTypes from 'prop-types';
import React from 'react';

const LocationInfoBox = ({ info }) => (
  <div className="location-info">
    <h2>Event location info</h2>
    <ul>
      <li>
        ID:
        <strong>{info.id}</strong>
      </li>
      <li>
        TITLE:
        <strong>{info.title}</strong>
      </li>
    </ul>
  </div>
);

LocationInfoBox.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default LocationInfoBox;
