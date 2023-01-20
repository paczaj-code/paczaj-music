import React, { useState, useEffect, useContext } from 'react';
import parse from 'html-react-parser';
import { AppContext } from '../../../../context/AppContext';
import Section from '../../../UI/Section/Section';
import Button from '../../../UI/Button/Buttons';
import ArtistInfoPanel from './ArtistInfoPanel';
interface SectionArtistDetailsTypes {
  artist_name: string;
  artist_description?: string;
  wikipedia_link?: string;
  country?: string;
  country_code?: string;
  tags?: string[];
  begin_date_year?: number;
  end_date_year?: number;
}

const SectionArtistDetails: React.FC<SectionArtistDetailsTypes> = ({
  artist_name,
  artist_description,
  wikipedia_link,
  country,
  country_code,
  tags,
  begin_date_year,
  end_date_year,
}) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [wikiInfoHeight, setWikiInfoHeight] = useState<number | null>(null);
  const { chosenArtistId } = useContext(AppContext);

  useEffect(() => {
    const wikiHeight = document.querySelector(
      '.artist-details__description'
    )?.scrollHeight;
    setWikiInfoHeight(wikiHeight!);

    const buttonShowMore = document.querySelector(
      '[class^="show__more__button"]'
    );

    if (wikiHeight! < 200) {
      buttonShowMore?.classList.add('hidden');
    } else {
      buttonShowMore?.classList.remove('hidden');
    }
  }, []);

  useEffect(() => {
    setShowMore(false);
  }, [chosenArtistId]);
  return (
    <Section section_type="artist-details" section_title={artist_name}>
      <div className="artist-details__description-wrapper">
        <div
          className="artist-details__description"
          style={{
            maxHeight: showMore ? wikiInfoHeight! : 190,
            transition: 'all 0.3s linear',
          }}
        >
          {artist_description
            ? parse(artist_description)
            : 'Brak opisu w Wikipedia'}
        </div>
        <div className="wikipedia__desctription__actions">
          <Button
            button_prefix="show__more"
            onClick={() => setShowMore(!showMore)}
            button_modifier={showMore ? 'open' : 'close'}
          >
            <i className={showMore ? 'icon-circle-up' : 'icon-circle-down'}></i>
            <span>{showMore ? 'Mniej' : 'Więcej'}</span>
          </Button>
          <a
            className="wikipedia__link"
            href={`https://en.wikipedia.org/wiki/${wikipedia_link}`}
            target="blank"
          >
            <i className="icon-wikipedia"></i>Wikipedia
          </a>
          {/* <p>
            Źródło:
            <a
              href={`https://en.wikipedia.org/wiki/${wikipedia_link}`}
              target="blank"
              className="wikipedia__link"
            >
              Wikipedia
            </a>
          </p> */}
        </div>
      </div>
      <ArtistInfoPanel
        country={country}
        country_code={country_code}
        tags={tags}
        begin_date_year={begin_date_year}
        end_date_year={end_date_year}
      />
    </Section>
  );
};

export default SectionArtistDetails;
