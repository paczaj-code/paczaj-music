import React from 'react';
import Divider from '../Divider/Divider';
import Heading from '../Heading/Heading';
import { ErrorTypes } from '../../../types/errorTypes';
import ErrorItem from './ErrorItem';

const Error: React.FC<ErrorTypes> = ({ error }) => {
  return (
    <div className="error__container" role="alert">
      <Heading
        heading_modifier="error"
        headingLevel="h2"
        title="Ups! Coś poszło nie cacy..."
        title_icon="icon-warning"
      />
      <Divider divider_modifier="error" />
      <ErrorItem title="Error message" info={error.message!} />
      {Boolean(error.status) && (
        <>
          <Divider divider_modifier="error" />
          <ErrorItem title="Error status code" info={error.status!} />
        </>
      )}
      {/* //   <p>Error message: {error.message}</p>
      {Boolean(error.status) && (
        <p>
          <span>Error message:</span> {error.status}
        </p>
      )} */}
    </div>
  );
};

export default Error;
