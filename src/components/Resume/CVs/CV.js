import React from 'react';
import PropTypes from 'prop-types';

const CV = ({ data }) => (
  <article className="cv-container">
    <header>
      <p classname="cv-paragraph"><a href={data.link}>Here is my CV</a></p>
    </header>
  </article>
);

CV.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default CV;
