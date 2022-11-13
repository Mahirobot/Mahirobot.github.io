import React from 'react';
import PropTypes from 'prop-types';

import CV from './CVs/CV';

const CVs = ({ data }) => (
  <div className="cv">
    <div className="link-to" id="cv" />
    <div className="title">
      <h3>Curriculum Vitae</h3>
    </div>
    {data.map((cv) => (
      <CV
        data={cv}
        key={cv.name}
      />
    ))}
  </div>
);

CVs.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
  })),
};

CVs.defaultProps = {
  data: [],
};

export default CVs;
