import React, { Component, PropTypes } from 'react';

const Row = (props) => {
  if (props.isHeading) {
    return <th>{props.data}</th>;
  }

  return (
    <tr>
      {props.data.map((item, key) => <td>{item}</td>)}
    </tr>
  );
};

Row.propTypes = {
  data: PropTypes.array.isRequired,
  isHeading: PropTypes.bool
};

export default Row;
