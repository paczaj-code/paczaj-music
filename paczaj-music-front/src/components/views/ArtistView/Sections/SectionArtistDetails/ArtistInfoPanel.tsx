import React from 'react';
import Divider from '../../../../UI/Divider/Divider';

interface ArtistInfoPanelTypes {
  country?: string;
  country_code?: string;
  begin_date_year?: number;
  end_date_year?: number;
  tags?: string[];
}

const ArtistInfoPanel: React.FC<ArtistInfoPanelTypes> = ({
  country,
  country_code,
  begin_date_year,
  end_date_year,
  tags,
}) => {
  return (
    <div className="artist-details__info-panel">
      <div className="info-panel__item--country">
        <p className="info-panel__title">Kraj:</p>
        <p className="info-panel__content">
          <img
            className="panel__info__item__flag"
            src={`https://www.countryflagicons.com/SHINY/32/${country_code!.trim()}.png`}
            alt={country_code}
            height={30}
          />
          {country}
        </p>
      </div>
      <Divider divider_prefix="info_panel" />
      <div className="info-panel__item--years">
        <p className="info-panel__title">Lata aktywności:</p>
        <p className="info-panel__content">
          {begin_date_year} - {end_date_year ? end_date_year : 'present'}
        </p>
      </div>
      <Divider divider_prefix="info_panel" />
      <div className="info-panel__item--tags">
        <p className="info-panel__title">Gatunki: </p>
        <p className="info-panel__content">
          {tags?.map((tag, index) => (
            <span key={index} className="artist__tag">
              {tag}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ArtistInfoPanel;
