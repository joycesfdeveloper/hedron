/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { divvy } from '../utils';


function RowContainer(props) {
  const { children, divisions, ...rest } = props;
  const scaledChildren = React.Children.map(children,
    child => React.cloneElement(child, {
      divisions: divisions
    })
  );
  return <section {...rest} children={scaledChildren} />;
}

RowContainer.propTypes = {
  className: React.PropTypes.string,
  divisions: React.PropTypes.number
};

RowContainer.defaultProps = {
  divisions: 12
};

const Row = styled(RowContainer)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;


export default Row;

