export interface ArtistDetailTypes {
  artist_name: string | undefined;
  artist_type: string;
  begin_date_year: number | undefined;
  country: string;
  country_code: string;
  end_date_year: number | undefined;
  tags: string[] | [] | undefined;
  wikipedia_suffix: string | undefined;
  wikipedia_data: { description: string | undefined };
}
