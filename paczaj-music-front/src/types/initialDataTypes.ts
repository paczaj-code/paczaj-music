export interface ArtistsListTypes {
  name: string;
  id: number;
  country: string;
  artist_type: string;
  tags: string[] | [];
}

export interface DatabaseStatisticsTypes {
  artists_qty: number | null;
  release_qty: number | null;
  track_qty: number | null;
  youtube_qty: number | null;
}

export interface InitialDataTypes {
  artists_list: ArtistsListTypes[] | undefined;
  db_statistics: DatabaseStatisticsTypes;
}
