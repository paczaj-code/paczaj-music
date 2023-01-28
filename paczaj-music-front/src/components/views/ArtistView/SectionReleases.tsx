import React from 'react';
import Section from '../../UI/Section/Section';
import { ReleaseTypes } from '../../../types/releaseTypes';
import ReleasePicture from '../../UI/Picture/ReleasePicture';
import noImage from '../../../assets/images/no-cover.png';
interface SectionReleasesTypes {
  releases: ReleaseTypes[];
  title: string;
}

const SectionReleases: React.FC<SectionReleasesTypes> = ({
  releases,
  title,
}) => {
  return (
    <Section section_type="releases" section_title={title}>
      {releases.map((release: ReleaseTypes) => (
        <ReleasePicture
          src={release.front_small ? release.front_small : noImage}
          picture_prefix="release"
          title={release.name}
          first_release_year={release.first_release_date}
          id={release.id}
        />
      ))}
    </Section>
  );
};

export default SectionReleases;
