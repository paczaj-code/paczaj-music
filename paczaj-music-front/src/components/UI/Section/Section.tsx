import React from 'react';
import Heading from '../Heading/Heading';
import { classNameModifiers } from '../../../uitls/utils';
import Divider from '../Divider/Divider';

interface SectionTypes {
  section_type: string;
  section_title: string;
  section_modifier?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionTypes> = ({
  section_title,
  section_type,
  section_modifier,
  children,
}) => {
  return (
    <section
      role="presentation"
      className={classNameModifiers(section_type, section_modifier, 'section')}
    >
      <Heading
        title={section_title}
        heading_prefix={section_type}
        heading_modifier={section_modifier}
      />
      {section_type === 'artist-details' && (
        <Divider
          divider_prefix={section_type}
          divider_modifier={section_modifier}
        />
      )}
      <div className={`${section_type}--content`}>{children}</div>
      <Divider
        divider_prefix={section_type}
        divider_modifier={section_modifier}
      />
    </section>
  );
};

export default Section;
