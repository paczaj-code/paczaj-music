export interface Artist {
  id: number;
  name: string;
  country: string;
  artist_type: string;
}

export interface WikipediaDataTypes {
  description?: string;
  status?: number;
}

export interface SingleArtist extends Artist {
  begin_date_year: number;
  end_date_year: number | undefined;
  wikipedia_suffix: string | undefined;
  tags: string[];
  wikipedia_data?: WikipediaDataTypes;
}

export interface Youtube {
  youtube_id: string;
  title: string;
}

export interface Album {
  id: number;
  name: string;
  first_release_date: Date;
  front_small: string;
}

export interface Albums {
  studio_albums?: Album[];
  extended_plays?: Album[];
  compilations?: Album[];
}

export interface DatabaseStatistics {
  artists_qty: number | null;
  release_qty: number | null;
  track_qty: number | null;
  youtube_qty: number | null;
}

export interface ReleaseInfoTypes {
  artist: string;
  front_big?: string;
  id: number;
  release_name: string;
  release_year?: number;
  total_time?: string;
}

export interface TrackTypes {
  id: number;
  name?: string;
  position?: number;
  length_minutes?: string;
}
