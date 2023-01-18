export interface ArtistInterface {
  name: string;
  id: number;
  current?: number | undefined;
  onClick?: React.MouseEventHandler;
  isLoading?: boolean | undefined;
}

export interface ArtistListInterface extends ArtistInterface {
  country: string;
  artist_type: string;
  tags: string[] | [];
}
