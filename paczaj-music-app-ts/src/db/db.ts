import pgPromise from 'pg-promise';
const pgp = pgPromise({ noWarnings: true });
export const db = pgp(
  'postgres://paczajmusic:paczajmusic@localhost:5433/paczajmusic'
);
