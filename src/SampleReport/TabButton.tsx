import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

type TabButtonProps = {
  isActive: boolean;
  icon: IconDefinition;
  label: string;
  onClick: () => void;
};

const TabButton: React.FC<TabButtonProps> = ({ isActive, icon, label, onClick }) => {
  return (
    <button className={`tab ${isActive ? 'active' : ''}`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} /><br />
      <span>{label}</span>
    </button>
  );
};

export default TabButton;
