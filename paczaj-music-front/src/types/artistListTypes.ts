export interface ArtistInterface {
  name: string;
  id: number;
  current?: number | undefined;
  onClick?: React.MouseEventHandler;
  isLoading?: boolean | undefined;
}

export interface ArtistListInterface extends ArtistInterface {
  [x: string]: any;
  country: string;
  artist_type: string;
  tags: string[] | [];
}
