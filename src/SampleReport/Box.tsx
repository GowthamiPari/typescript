import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type BoxProps = {
  title: string;
  icon: IconDefinition;
  value: number | string;
};

const Box: React.FC<BoxProps> = ({ title, icon, value }) => {
  return (
    <div className="box">
      <span className="icon">
        <FontAwesomeIcon icon={icon} size="2x" />
      </span>
      <div className='text-Overlay'>
      <h3>{title}</h3>
      <h1>{value}</h1>
      </div>
    </div>
  );
};

export default Box;
