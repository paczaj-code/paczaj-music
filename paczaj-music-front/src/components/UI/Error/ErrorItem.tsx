import React from 'react';

interface ErrorItemTypes {
  title: string;
  info: string | number;
}

const ErrorItem: React.FC<ErrorItemTypes> = ({ title, info }) => {
  return (
    <p className="error-item" role="presentation">
      {title}: <span>{info}</span>
    </p>
  );
};

export default ErrorItem;
