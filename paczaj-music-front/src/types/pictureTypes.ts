export interface PictureTypes {
  src: string;
  alt?: string;
  onClick?: React.MouseEventHandler;
  picture_prefix?: string;
  picture_modifier?: string;
  title?: string;
  first_release_year?: number;
  id?: number | string;
}
