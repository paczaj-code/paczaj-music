import React from 'react';
import { classNameModifiers } from '../../../uitls/utils';

interface HeadingTypes {
  headingLevel: React.ElementType | string;
  title: string | undefined;
  title_icon?: string;
  heading_prefix?: string;
  heading_modifier?: string;
}

const Heading: React.FC<HeadingTypes> = ({
  headingLevel = 'h2',
  title,
  title_icon,
  heading_prefix,
  heading_modifier,
}) => {
  const HeadingTag = headingLevel;
  return (
    <HeadingTag
      className={classNameModifiers(
        heading_prefix,
        heading_modifier,
        'heading'
      )}
    >
      {title_icon && <i className={title_icon}></i>}
      {title}
    </HeadingTag>
  );
};

export default Heading;
